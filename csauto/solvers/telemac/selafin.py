"""Values at given points of a SERAFIN (SELAFIN) file, read while TELEMAC writes it: the time series files of its probes.

A SERAFIN file is a sequence of Fortran records (a 4-byte length before and
after each one), big-endian as TELEMAC writes them: a header (title, variable
names, mesh), then one frame per graphic printout: a time record and one
record of NPOIN values per variable, in single or double precision.

Only the values at the requested nodes are read, by seeking to them. Frames are read as they complete; a parallel run
writes one file per partition, whose IPOBO record holds the global number of
each local node (KNOLG), and a time counts once every partition has it.
"""

from __future__ import annotations

import struct
import sys
import threading
from array import array
from collections import OrderedDict
from collections.abc import Sequence
from dataclasses import dataclass, field
from pathlib import Path
from typing import BinaryIO

TITLE_LENGTH = 80


@dataclass(frozen=True)
class SelafinHeader:
    endian: str  # ">" or "<"
    var_names: list[str]
    nvar: int  # records per frame: the variables, and the extra ones (NBV2) var_names leaves out
    npoin: int
    float_size: int  # 4 or 8
    ipobo_offset: int  # where the IPOBO values start
    data_offset: int  # where the first frame starts

    def float_format(self) -> str:
        return self.endian + ("f" if self.float_size == 4 else "d")


def _record(handle: BinaryIO, endian: str) -> tuple[int, int] | None:
    """(payload offset, size) of the record at the current position, skipped; None when incomplete."""
    head = handle.read(4)
    if len(head) < 4:
        return None
    (size,) = struct.unpack(endian + "i", head)
    start = handle.tell()
    handle.seek(size, 1)
    tail = handle.read(4)
    if len(tail) < 4 or size < 0:
        return None
    return start, size


def read_header(handle: BinaryIO) -> SelafinHeader | None:
    """The file's header, or None while it is not completely written."""
    handle.seek(0)
    head = handle.read(4)
    if len(head) < 4:
        return None
    endian = ">" if struct.unpack(">i", head)[0] == TITLE_LENGTH else "<"
    handle.seek(0)
    title = _record(handle, endian)
    counts = _record(handle, endian)
    if title is None or counts is None:
        return None
    handle.seek(counts[0])
    nbv1, nbv2 = struct.unpack(endian + "2i", handle.read(8))
    handle.seek(counts[0] + counts[1] + 4)
    names = []
    for _ in range(nbv1 + nbv2):
        record = _record(handle, endian)
        if record is None:
            return None
        names.append(record)
    iparam = _record(handle, endian)
    if iparam is None:
        return None
    position = handle.tell()
    handle.seek(iparam[0])
    has_date = struct.unpack(endian + "10i", handle.read(40))[9] == 1
    handle.seek(position)
    geometry = [_record(handle, endian) for _ in range(5 if has_date else 4)]  # [date], sizes, ikle, ipobo, x
    if None in geometry:
        return None
    y = _record(handle, endian)
    if y is None:
        return None
    data_offset = handle.tell()
    sizes, _ikle, ipobo, x = geometry[-4:]
    handle.seek(sizes[0])
    _nelem, npoin, _ndp, _one = struct.unpack(endian + "4i", handle.read(16))
    var_names = []
    for start, _size in names[:nbv1]:
        handle.seek(start)
        var_names.append(handle.read(16).decode("latin-1").strip())
    return SelafinHeader(
        endian=endian,
        var_names=var_names,
        nvar=nbv1 + nbv2,
        npoin=npoin,
        float_size=x[1] // npoin if npoin else 4,
        ipobo_offset=ipobo[0],
        data_offset=data_offset,
    )


def read_ipobo(handle: BinaryIO, header: SelafinHeader) -> array[int]:
    """The IPOBO record: boundary numbering, or local -> global numbering in a partition."""
    handle.seek(header.ipobo_offset)
    values = array("i")
    values.frombytes(handle.read(4 * header.npoin))
    if (header.endian == ">") != (sys.byteorder == "big"):
        values.byteswap()
    return values


@dataclass
class NodeSeries:
    """Every variable's values at a few nodes, one per complete frame."""

    variables: list[str] = field(default_factory=list)
    nodes: list[int] = field(default_factory=list)  # the requested nodes found in the file(s)
    times: list[float] = field(default_factory=list)
    values: dict[str, dict[int, list[float]]] = field(default_factory=dict)


@dataclass
class _Reader:
    key: tuple[tuple[str, int, int], ...]
    lock: threading.Lock = field(default_factory=threading.Lock)
    headers: list[SelafinHeader] = field(default_factory=list)
    locations: dict[int, tuple[int, int]] = field(default_factory=dict)  # node -> (file, local index)
    time_size: int = 0  # bytes of a frame's time record, read from the first frame
    series: NodeSeries = field(default_factory=NodeSeries)


_READERS: OrderedDict[tuple[str, ...], _Reader] = OrderedDict()
_READERS_LOCK = threading.Lock()
_MAX_CACHED_READERS = 64


def read_node_series(paths: Sequence[Path], nodes: Sequence[int]) -> NodeSeries | None:
    """Every variable's values at `nodes` (global numbers, from 1) of one file or of its partitions.

    None while the files have no complete header yet. Each call reads only
    the frames completed since the previous one.
    """
    try:
        stats = [path.stat() for path in paths]
    except OSError:
        return None
    key = tuple((str(path), stat.st_dev, stat.st_ino) for path, stat in zip(paths, stats, strict=True))
    cache_key = (*(str(path) for path in paths), ",".join(map(str, nodes)))
    with _READERS_LOCK:
        reader = _READERS.get(cache_key)
        if reader is None or reader.key != key:
            reader = _READERS[cache_key] = _Reader(key=key)
        _READERS.move_to_end(cache_key)
        while len(_READERS) > _MAX_CACHED_READERS:
            _READERS.popitem(last=False)
    with reader.lock:
        try:
            series = _update(reader, paths, [stat.st_size for stat in stats], nodes)
        except (OSError, struct.error, ValueError):
            return None  # a file moved or cut while TELEMAC finishes the run
        if series is None:
            return None
        return NodeSeries(  # a copy, which the next call cannot change under its reader
            list(series.variables),
            list(series.nodes),
            list(series.times),
            {var: {node: list(values) for node, values in by_node.items()} for var, by_node in series.values.items()},
        )


def _update(reader: _Reader, paths: Sequence[Path], sizes: Sequence[int], nodes: Sequence[int]) -> NodeSeries | None:
    handles = [path.open("rb") for path in paths]
    try:
        if not reader.headers:
            headers = [read_header(handle) for handle in handles]
            if any(header is None for header in headers):
                return None
            reader.headers = [header for header in headers if header is not None]
            _locate(reader, handles, nodes)
        first = reader.headers[0]
        if not reader.time_size:
            if sizes[0] < first.data_offset + 4:
                return reader.series
            handles[0].seek(first.data_offset)
            (reader.time_size,) = struct.unpack(first.endian + "i", handles[0].read(4))
        complete = min(
            (size - header.data_offset) // _frame_size(header, reader.time_size)
            for header, size in zip(reader.headers, sizes, strict=True)
        )
        if complete < len(reader.series.times):
            reader.series = NodeSeries(reader.series.variables, reader.series.nodes)
            reader.series.values = {var: {node: [] for node in reader.series.nodes} for var in reader.series.variables}
        time_format = first.endian + ("f" if reader.time_size == 4 else "d")
        for frame in range(len(reader.series.times), complete):
            handles[0].seek(first.data_offset + frame * _frame_size(first, reader.time_size) + 4)
            (time,) = struct.unpack(time_format, handles[0].read(reader.time_size))
            for index, var in enumerate(reader.series.variables):
                for node, (part, local) in reader.locations.items():
                    header = reader.headers[part]
                    handle = handles[part]
                    handle.seek(
                        header.data_offset
                        + frame * _frame_size(header, reader.time_size)
                        + 8
                        + reader.time_size
                        + index * (8 + header.npoin * header.float_size)
                        + 4
                        + local * header.float_size
                    )
                    (value,) = struct.unpack(header.float_format(), handle.read(header.float_size))
                    reader.series.values[var][node].append(value)
            reader.series.times.append(time)
        return reader.series
    finally:
        for handle in handles:
            handle.close()


def _frame_size(header: SelafinHeader, time_size: int) -> int:
    return 8 + time_size + header.nvar * (8 + header.npoin * header.float_size)


def _locate(reader: _Reader, handles: Sequence[BinaryIO], nodes: Sequence[int]) -> None:
    """Which file holds each node, at which local index."""
    first = reader.headers[0]
    wanted = list(dict.fromkeys(nodes))
    if len(reader.headers) == 1:
        reader.locations = {node: (0, node - 1) for node in wanted if 1 <= node <= first.npoin}
    else:
        remaining = set(wanted)
        for part, (handle, header) in enumerate(zip(handles, reader.headers, strict=True)):
            for local, global_node in enumerate(read_ipobo(handle, header)):
                if global_node in remaining:
                    reader.locations[global_node] = (part, local)
                    remaining.discard(global_node)
            if not remaining:
                break
        reader.locations = {node: reader.locations[node] for node in wanted if node in reader.locations}
    found = list(reader.locations)
    reader.series = NodeSeries(
        variables=list(first.var_names),
        nodes=found,
        values={var: {node: [] for node in found} for var in first.var_names},
    )


__all__ = ["NodeSeries", "read_header", "read_ipobo", "read_node_series"]
