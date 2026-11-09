"""Incremental reading of an openTELEMAC listing (runcode's standard output).

Only values TELEMAC prints are kept, at its LISTING PRINTOUT PERIOD:

- progress: the time step and the simulated time of TELEMAC-2D
  (``ITERATION 1000  TIME:  1 MN 40.0000 S  (100.0000 S)``), TELEMAC-3D
  (``ITERATION 10 TIME 0 D 0 H 0 MN 0.4000 S (0.4000 S)``) and TOMAWAC
  (``TEMPS : 300.0000 SECONDES  3000IEME ITERATION``);
- linear solver iterations, named after the stage of the time step they run
  in (``diffusion-propagation: GMRES (BIEF)``), ``#2`` for a second call in
  the same stage;
- liquid boundary fluxes (``FLUX BOUNDARY 1: -3.77 M3/S``);
- the water volume error: relative since the start in TELEMAC-2D
  (``RELATIVE ERROR IN VOLUME AT T = 5.0 S : 0.18E-14``), in m3 during the
  time step in TELEMAC-3D (``ERROR ON THE VOLUME DURING THIS TIME STEP``);
- the water volume in the domain (``VOLUME IN THE DOMAIN : 87.37 M3``,
  ``VOLUME AT THE PRESENT TIME STEP : 999.78``);
- control-section discharges (``CONTROL SECTION NUMBER 1 (...)`` then
  ``DISCHARGE: 519.25``), from the CONTROL SECTIONS keyword;
- each tracer's balance: its quantity and relative error
  (``BALANCE OF TRACER 1`` then ``FINAL QUANTITY`` and ``RELATIVE ERROR``);
- the maximum Courant number (``PRERES: MAXIMUM COURANT NUMBER: 0.72``);
- the elapsed time printed at the end of the run.

Listings can reach hundreds of MB: each call reads only what was appended
since the previous one, and only lines holding one of a few words are parsed.
"""

from __future__ import annotations

import re
import threading
from collections import OrderedDict, deque
from dataclasses import dataclass, field
from pathlib import Path

NUM = r"[-+]?(?:\d+\.?\d*|\.\d+)(?:[EeDd][-+]?\d+)?"

ITERATION_PATTERN = re.compile(r"^\s*ITERATION\s+(\d+)\s+TIME\s*:?\s*(.*)$")
TOMAWAC_ITERATION_PATTERN = re.compile(rf"^\s*TEMPS\s*:\s*({NUM})\s*SECONDES\s+(\d+)\s*IEME\s+ITERATION")
TIME_SECONDS_PATTERN = re.compile(rf"\(\s*({NUM})\s*S\s*\)")
TIME_PATTERN = re.compile(rf"({NUM})\s*S\b")
# "GMRES (BIEF) :  12 ITERATIONS, ..." or "GMRES (BIEF) : EXCEEDING MAXIMUM ITERATIONS: 100 ..."
SOLVER_PATTERN = re.compile(
    r"^\s*([A-Z][A-Z0-9_]*)\s*\((\w+)\)\s*:\s*(?:(\d+)\s+ITERATIONS|EXCEEDING MAXIMUM ITERATIONS:?\s*(\d+))"
)
SEPARATOR_PATTERN = re.compile(r"^\s*-{20,}\s*$")
FLUX_PATTERN = re.compile(rf"^\s*FLUX BOUNDARY\s+(\d+)\s*:\s*({NUM})")
VOLUME_ERROR_PATTERN = re.compile(rf"RELATIVE ERROR IN VOLUME AT T =\s*({NUM})\s*S\s*:\s*({NUM})")
VOLUME_STEP_ERROR_PATTERN = re.compile(rf"^\s*ERROR ON THE VOLUME DURING THIS TIME STEP\s*:\s*({NUM})")
VOLUME_PATTERN = re.compile(rf"^\s*(?:VOLUME IN THE DOMAIN|VOLUME AT THE PRESENT TIME STEP)\s*:\s*({NUM})")
# "CONTROL SECTION NUMBER  1 (BETWEEN POINTS    56 AND   211)" or "... NUMBER  1 (NAME weir)"
SECTION_PATTERN = re.compile(r"^\s*CONTROL SECTION NUMBER\s+(\d+)\s*(?:\(NAME\s+(.*?)\))?")
DISCHARGE_PATTERN = re.compile(rf"^\s*DISCHARGE\s*:\s*({NUM})")
TRACER_BALANCE_PATTERN = re.compile(r"^\s*BALANCE OF TRACER\s+(\d+)")  # not the FINAL BALANCE at the end
TRACER_QUANTITY_PATTERN = re.compile(rf"^\s*FINAL QUANTITY\s*:\s*({NUM})")
TRACER_ERROR_PATTERN = re.compile(rf"^\s*RELATIVE ERROR\s*:\s*({NUM})")
COURANT_PATTERN = re.compile(rf"MAXIMUM COURANT NUMBER\s*:\s*({NUM})")
ELAPSED_START = "ELAPSE TIME :"
ELAPSED_PART_PATTERN = re.compile(r"^\s*(\d+)\s+(DAYS|HOURS|MINUTES|SECONDS)\s*$")
ELAPSED_UNITS = {"DAYS": 86400, "HOURS": 3600, "MINUTES": 60, "SECONDS": 1}
# Other ranks may print lines (STOP 0) between ELAPSE TIME and its values.
ELAPSED_LOOKAHEAD = 12
# Words found in every line ListingState.feed uses; a separator also brings the stage title after it.
RELEVANT_WORD_PATTERN = re.compile(
    r"ITERATION|TEMPS|-{20,}|FLUX BOUNDARY|VOLUME|ELAPSE TIME|DAYS|HOURS|MINUTES|SECONDS"
    r"|CONTROL SECTION|DISCHARGE|TRACER|QUANTITY|RELATIVE ERROR|COURANT"
)
MAX_POINTS = 20000  # per series: the oldest points go first
LAST_BYTES_CHECKED = 64
READ_CHUNK_BYTES = 4 * 1024 * 1024


def _float(text: str) -> float:
    return float(text.replace("D", "E").replace("d", "e"))


def _series() -> deque[tuple[float, float]]:
    return deque(maxlen=MAX_POINTS)


@dataclass
class ListingState:
    """What the listing has said so far."""

    key: tuple[int, int] = (0, 0)  # device, inode
    offset: int = 0
    partial: bytes = b""
    last_bytes: bytes = b""  # the bytes just before offset, to notice a rewritten listing
    iteration: int | None = None
    time: float | None = None
    first_time: float | None = None  # where the run started: 0, or the time a continued computation starts from
    elapsed_seconds: int | None = None
    solvers: OrderedDict[str, deque[tuple[float, float]]] = field(default_factory=OrderedDict)
    fluxes: OrderedDict[int, deque[tuple[float, float]]] = field(default_factory=OrderedDict)
    volume_error: deque[tuple[float, float]] = field(default_factory=_series)
    volume_step_error: deque[tuple[float, float]] = field(default_factory=_series)
    volume: deque[tuple[float, float]] = field(default_factory=_series)
    sections: OrderedDict[str, deque[tuple[float, float]]] = field(default_factory=OrderedDict)
    tracer_quantities: OrderedDict[int, deque[tuple[float, float]]] = field(default_factory=OrderedDict)
    tracer_errors: OrderedDict[int, deque[tuple[float, float]]] = field(default_factory=OrderedDict)
    courant: deque[tuple[float, float]] = field(default_factory=_series)
    _section: str = ""  # the control section whose DISCHARGE line comes next
    _tracer: int = 0  # the tracer whose balance is being printed
    _stage: str = ""
    _calls: dict[str, int] = field(default_factory=dict)
    _after_separator: bool = False
    _elapsed_lines_left: int = 0

    def feed(self, line: str) -> None:
        after_separator, self._after_separator = self._after_separator, False
        if self._elapsed_lines_left:
            self._elapsed_lines_left -= 1
            part = ELAPSED_PART_PATTERN.match(line)
            if part:
                seconds = int(part.group(1)) * ELAPSED_UNITS[part.group(2)]
                self.elapsed_seconds = (self.elapsed_seconds or 0) + seconds
                if part.group(2) == "SECONDS":
                    self._elapsed_lines_left = 0
                return
        match = ITERATION_PATTERN.match(line)
        if match:
            seconds = TIME_SECONDS_PATTERN.search(match.group(2)) or TIME_PATTERN.search(match.group(2))
            self._new_time_step(int(match.group(1)), _float(seconds.group(1)) if seconds else None)
            return
        match = TOMAWAC_ITERATION_PATTERN.match(line)
        if match:
            self._new_time_step(int(match.group(2)), _float(match.group(1)))
            return
        if SEPARATOR_PATTERN.match(line):
            self._after_separator = True
            return
        match = SOLVER_PATTERN.match(line)
        if match:
            if self.time is not None:
                self._add_solver_call(f"{match.group(1)} ({match.group(2)})", int(match.group(3) or match.group(4)))
            return
        if after_separator and line.strip():
            stage = line.strip().lower()
            self._stage = stage.removesuffix(" step")
            self._calls = {}
            return
        if line.strip() == ELAPSED_START:
            self.elapsed_seconds = 0
            self._elapsed_lines_left = ELAPSED_LOOKAHEAD
            return
        match = FLUX_PATTERN.match(line)
        if match and self.time is not None:
            self.fluxes.setdefault(int(match.group(1)), _series()).append((self.time, _float(match.group(2))))
            return
        match = VOLUME_ERROR_PATTERN.search(line)
        if match:
            self.volume_error.append((_float(match.group(1)), _float(match.group(2))))
            return
        match = VOLUME_STEP_ERROR_PATTERN.match(line)
        if match and self.time is not None:
            self.volume_step_error.append((self.time, _float(match.group(1))))
            return
        if self.time is None:
            return
        self._feed_balances(line, self.time)

    def _feed_balances(self, line: str, time: float) -> None:
        """Volume, control sections, tracers and Courant number, at the current time."""
        match = VOLUME_PATTERN.match(line)
        if match:
            self.volume.append((time, _float(match.group(1))))
            self._tracer = 0
            return
        match = SECTION_PATTERN.match(line)
        if match:
            self._section = match.group(2).strip() if match.group(2) else f"section {match.group(1)}"
            return
        match = DISCHARGE_PATTERN.match(line)
        if match and self._section:
            self.sections.setdefault(self._section, _series()).append((time, _float(match.group(1))))
            self._section = ""
            return
        if "FINAL BALANCE" in line:
            self._tracer = 0  # cumulated over the whole run, printed once at its end
            return
        match = TRACER_BALANCE_PATTERN.match(line)
        if match:
            self._tracer = int(match.group(1))
            return
        match = TRACER_QUANTITY_PATTERN.match(line)
        if match and self._tracer:
            self.tracer_quantities.setdefault(self._tracer, _series()).append((time, _float(match.group(1))))
            return
        match = TRACER_ERROR_PATTERN.match(line)
        if match and self._tracer:
            self.tracer_errors.setdefault(self._tracer, _series()).append((time, _float(match.group(1))))
            self._tracer = 0
            return
        match = COURANT_PATTERN.search(line)
        if match:
            value = _float(match.group(1))
            if self.courant and self.courant[-1][0] == time:  # printed more than once a step: keep the largest
                value = max(value, self.courant.pop()[1])
            self.courant.append((time, value))

    def _new_time_step(self, iteration: int, time: float | None) -> None:
        self.iteration = iteration
        if time is not None:
            self.time = time
            if self.first_time is None:
                self.first_time = time
        self._stage = ""
        self._calls = {}
        self._section = ""
        self._tracer = 0

    def _add_solver_call(self, solver: str, iterations: int) -> None:
        count = self._calls[solver] = self._calls.get(solver, 0) + 1
        name = f"{self._stage}: {solver}" if self._stage else solver
        if count > 1:
            name += f" #{count}"
        assert self.time is not None
        self.solvers.setdefault(name, _series()).append((self.time, float(iterations)))


@dataclass(frozen=True)
class ListingSummary:
    """A copy of what a listing has said so far, safe to use while it is read further."""

    iteration: int | None
    time: float | None
    first_time: float | None
    elapsed_seconds: int | None
    solvers: dict[str, list[tuple[float, float]]]
    fluxes: dict[int, list[tuple[float, float]]]
    volume_error: list[tuple[float, float]]
    volume_step_error: list[tuple[float, float]]
    volume: list[tuple[float, float]]
    sections: dict[str, list[tuple[float, float]]]
    tracer_quantities: dict[int, list[tuple[float, float]]]
    tracer_errors: dict[int, list[tuple[float, float]]]
    courant: list[tuple[float, float]]

    @classmethod
    def of(cls, state: ListingState) -> ListingSummary:
        return cls(
            state.iteration,
            state.time,
            state.first_time,
            state.elapsed_seconds,
            {name: list(points) for name, points in state.solvers.items()},
            {boundary: list(points) for boundary, points in state.fluxes.items()},
            list(state.volume_error),
            list(state.volume_step_error),
            list(state.volume),
            {name: list(points) for name, points in state.sections.items()},
            {tracer: list(points) for tracer, points in state.tracer_quantities.items()},
            {tracer: list(points) for tracer, points in state.tracer_errors.items()},
            list(state.courant),
        )


@dataclass
class _CachedListing:
    lock: threading.Lock = field(default_factory=threading.Lock)
    state: ListingState = field(default_factory=ListingState)


_LISTINGS: OrderedDict[str, _CachedListing] = OrderedDict()
_LISTINGS_LOCK = threading.Lock()  # guards _LISTINGS only; each listing is read under its own lock
_MAX_CACHED_LISTINGS = 256


def read_listing(path: Path) -> ListingSummary | None:
    """What the listing says, reading only what was appended since the last call.

    A relaunch truncates the listing in place (same inode): the bytes just
    before the offset are checked again, so a new run that has already grown
    past the old offset is still read from its start.
    """
    try:
        stat = path.stat()
    except OSError:
        return None
    key = (stat.st_dev, stat.st_ino)
    cache_key = str(path.resolve())
    with _LISTINGS_LOCK:
        cached = _LISTINGS.setdefault(cache_key, _CachedListing())
        _LISTINGS.move_to_end(cache_key)
        while len(_LISTINGS) > _MAX_CACHED_LISTINGS:
            _LISTINGS.popitem(last=False)
    with cached.lock:
        state = cached.state
        if state.key != key or stat.st_size < state.offset:
            state = ListingState(key=key)
        try:
            with path.open("rb") as handle:
                if state.offset:
                    handle.seek(state.offset - len(state.last_bytes))
                    if handle.read(len(state.last_bytes)) != state.last_bytes:
                        state = ListingState(key=key)
                        handle.seek(0)
                while chunk := handle.read(READ_CHUNK_BYTES):
                    _feed_chunk(state, chunk)
        except OSError:
            pass
        cached.state = state
        return ListingSummary.of(state)


def _feed_chunk(state: ListingState, chunk: bytes) -> None:
    state.offset += len(chunk)
    state.last_bytes = (state.last_bytes + chunk)[-LAST_BYTES_CHECKED:]
    complete, newline, partial = (state.partial + chunk).rpartition(b"\n")
    state.partial = partial
    if not newline:
        return
    # Most of the listing (balances, headings) is skipped without a Python loop over its lines.
    text = complete.decode("utf-8", errors="replace")
    line_end = -1
    for match in RELEVANT_WORD_PATTERN.finditer(text):
        if match.start() <= line_end:
            continue  # another word of a line already fed
        line_start = text.rfind("\n", 0, match.start()) + 1
        line_end = _line_end(text, match.end())
        line = text[line_start:line_end].rstrip("\r")
        state.feed(line)
        if SEPARATOR_PATTERN.match(line) and line_end < len(text):
            # The stage title, on the line after the separator.
            next_end = _line_end(text, line_end + 1)
            state.feed(text[line_end + 1 : next_end].rstrip("\r"))
            line_end = next_end


def _line_end(text: str, position: int) -> int:
    end = text.find("\n", position)
    return len(text) if end == -1 else end


def column_name(label: str) -> str:
    """A series name the Probes panel can ask for: it splits the names it sends at commas and spaces.

    "volume in the domain (m3)" -> "volume_in_the_domain_(m3)".
    """
    return re.sub(r"[\s,:]+", "_", label.strip())


def series_table(series: dict[str, list[tuple[float, float]]]) -> tuple[list[str], list[dict[str, str]]]:
    """(columns, rows) of several time series on a common "time" column."""
    rows: dict[float, dict[str, str]] = {}
    names = {label: column_name(label) for label in series}
    for label, points in series.items():
        for time, value in points:
            rows.setdefault(time, {"time": repr(time)})[names[label]] = repr(value)
    return ["time", *names.values()], [rows[time] for time in sorted(rows)]


__all__ = ["ListingSummary", "column_name", "read_listing", "series_table"]
