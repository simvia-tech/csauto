"""openTELEMAC solver adapter.

Every TELEMAC module is started by the same launcher, ``runcode.py <module>
[options] <cas>`` (``telemac2d.py`` and the others are wrappers of it), from
inside the case folder. The module is the one chosen in the campaign's TELEMAC
module menu (kept in RUNS/campaign.json), else it is read from the main
steering file: keywords only one module's dictionary has, else the file name
prefix (``t2d_``, ``t3d_``...).
``n`` becomes ``--ncsize`` and ``--mpi`` keeps runcode from submitting its own
HPC job: csauto already handles Slurm.

runcode copies the listing to its standard output, which csauto saves in
``csauto.stdout``: progress and timing are read from it (listing.py).
TELEMAC prints no equation residuals, so the dashboard's Probes panel shows,
against the simulated time, what the listing prints (boundary fluxes, water
volume error, linear solver iterations) and TELEMAC's own probes, the time
series files it writes at the points of its TIME SERIES COORDINATES FILE
(selafin.py).
Internally coupled modules (GAIA, TOMAWAC, WAQTEL, KHIONE through ``COUPLING
WITH``) run inside the same runcode call; csauto only needs to start the main
steering file, the one no other steering file references. Results go where
the steering file says, relative to the case folder: write them under
``RESU/`` (``RESULTS FILE = 'RESU/r2d.slf'``) for Clean and the results
listing to see them.
"""

from __future__ import annotations

import contextlib
import os
import re
import threading
from collections import Counter, OrderedDict
from collections.abc import Iterable, Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar

from ...logs import scan_outcome
from ...pathutil import safe_subpath
from ...registry import read_history
from ..base import (
    CaseInput,
    CaseOption,
    CompareKind,
    PerfColumn,
    RestartMode,
    SetupNote,
    SimulationProgress,
    SolverAdapter,
)
from .keywords import UNIQUE_KEYWORDS
from .listing import ListingSummary, column_name, read_listing, series_table
from .selafin import read_header, read_ipobo, read_node_series

if TYPE_CHECKING:
    from ...maintenance import DoctorItem

CAS_GLOB = "*.cas"
LOGOS = Path(__file__).parent.parent / "logos"
LISTING_NAME = "csauto.stdout"

# Modules runcode can start. GAIA, WAQTEL and KHIONE only run coupled to one of them.
RUNNABLE_MODULES = ("telemac2d", "telemac3d", "tomawac", "artemis", "stbtel", "postel3d")

# Only TELEMAC-2D and TELEMAC-3D drive a coupling: the last resort reads it as 2D.
COUPLING_KEYWORDS = ("COUPLING WITH", "COUPLAGE AVEC")
FILE_PREFIXES: Mapping[str, str] = {
    "t2d": "telemac2d",
    "t3d": "telemac3d",
    "tom": "tomawac",
    "wac": "tomawac",
    "art": "artemis",
    "stb": "stbtel",
    "p3d": "postel3d",
}
OVERRIDE_HINT = "choose it in the TELEMAC module menu (dashboard or New Campaign)"
UNDETECTED_PREFIX = "Cannot tell which TELEMAC module runs"
# How a module was found, when csauto found it itself.
DETECTION_SOURCES = {"keywords": "from its keywords", "file name": "from its file name"}

# "GAIA STEERING FILE" / "FICHIER DES PARAMETRES DE GAIA": a coupled module's steering file.
COUPLED_FILE_KEYWORD = r"(?:[A-Z0-9]+[ \t]+STEERING[ \t]+FILE|FICHIER[ \t]+DES[ \t]+PARAMETRES[ \t]+DE[ \t]+[A-Z0-9]+)"
RESULT_KEYWORDS = (
    "RESULTS FILE",
    "FICHIER DES RESULTATS",
    "2D RESULT FILE",
    "3D RESULT FILE",
    "2D RESULTS FILE",
    "FICHIER DES RESULTATS 2D",
    "FICHIER DES RESULTATS 3D",
)
PARALLEL_KEYWORDS = ("PARALLEL PROCESSORS", "PROCESSEURS PARALLELES")
# What a run simulates: DURATION when set, else NUMBER OF TIME STEPS (TOMAWAC: STEP) x TIME STEP.
DURATION_KEYWORDS = ("DURATION", "DUREE DU CALCUL")
TIME_STEP_COUNT_KEYWORDS = ("NUMBER OF TIME STEPS", "NUMBER OF TIME STEP", "NOMBRE DE PAS DE TEMPS")
TIME_STEP_KEYWORDS = ("TIME STEP", "PAS DE TEMPS")
# Restart: csauto writes a copy of the main steering file that continues from the last results (TELEMAC v9:
# PREVIOUS COMPUTATION FILE alone triggers it) and launches that copy; the case's own .cas is never changed.
RESTART_CAS_NAME = ".csauto.restart.cas"
PREVIOUS_FILE_KEYWORDS = ("PREVIOUS COMPUTATION FILE", "FICHIER DU CALCUL PRECEDENT")
PREVIOUS_FORMAT_KEYWORDS = ("PREVIOUS COMPUTATION FILE FORMAT", "FORMAT DU FICHIER DU CALCUL PRECEDENT")
RESTART_RECORD_KEYWORDS = ("RECORD NUMBER FOR RESTART", "ENREGISTREMENT POUR SUITE DE CALCUL")
TIME_ZERO_KEYWORDS = ("INITIAL TIME SET TO ZERO", "REMISE A ZERO DU TEMPS")
# What a restart continues from, best first: the RESTART FILE (a perfect continuation), else the results.
RESTART_SOURCES: Mapping[str, tuple[tuple[tuple[str, ...], tuple[str, ...]], ...]] = {
    "telemac2d": (
        (("RESTART FILE", "FICHIER POUR SUITE"), ("RESTART FILE FORMAT", "FORMAT DU FICHIER POUR SUITE")),
        (("RESULTS FILE", "FICHIER DES RESULTATS"), ("RESULTS FILE FORMAT", "FORMAT DU FICHIER DES RESULTATS")),
    ),
    "telemac3d": (
        (("RESTART FILE", "FICHIER POUR SUITE"), ("RESTART FILE FORMAT", "FORMAT DU FICHIER POUR SUITE")),
        (
            ("3D RESULT FILE", "FICHIER DES RESULTATS 3D"),
            ("3D RESULT FILE FORMAT", "FORMAT DU FICHIER DES RESULTATS 3D"),
        ),
    ),
}
# The unit a simulated duration is shown in: the largest one it spans at least twice.
TIME_UNITS = ((86400.0, "d"), (3600.0, "h"), (60.0, "min"), (1.0, "s"))
# Modules TELEMAC-2D and TELEMAC-3D run coupled (COUPLING WITH), and the keywords naming their steering file.
COUPLED_MODULES: Mapping[str, tuple[str, ...]] = {
    "gaia": ("GAIA STEERING FILE", "FICHIER DES PARAMETRES DE GAIA"),
    "tomawac": ("TOMAWAC STEERING FILE", "FICHIER DES PARAMETRES DE TOMAWAC"),  # also TOMAWAC2, TOMAWACT3D
    "waqtel": ("WAQTEL STEERING FILE", "FICHIER DES PARAMETRES DE WAQTEL"),
    "khione": ("KHIONE STEERING FILE", "FICHIER DES PARAMETRES DE KHIONE"),
    "delwaq": (),  # writes files for DELWAQ, which runs apart: no steering file to give
}
# TELEMAC's own probes: a TIME SERIES COORDINATES FILE lists points, and TELEMAC writes the values there in a
# TIME SERIES FILE (SERAFIN). Per module: (coordinates keywords, [(name in the working folder, file keywords,
# what tells this file from the module's other one)]).
TIME_SERIES: Mapping[str, tuple[tuple[tuple[str, ...], tuple[tuple[str, tuple[str, ...], str], ...]], ...]] = {
    "telemac2d": (
        (
            ("TIME SERIES COORDINATES FILE 1", "FICHIER DE COORDONNEES DES SERIES TEMPORELLES 1"),
            (("T2DHI1", ("TIME SERIES FILE 1", "FICHIER DES SERIES TEMPORELLES 1"), ""),),
        ),
        (
            ("TIME SERIES COORDINATES FILE 2", "FICHIER DE COORDONNEES DES SERIES TEMPORELLES 2"),
            (("T2DHI2", ("TIME SERIES FILE 2", "FICHIER DES SERIES TEMPORELLES 2"), "2"),),
        ),
    ),
    "telemac3d": (
        (
            ("TIME SERIES COORDINATES FILE", "FICHIER DE COORDONNEES DES SERIES TEMPORELLES"),
            (
                ("T3DHI2", ("2D TIME SERIES FILE", "FICHIER DES SERIES TEMPORELLES 2D"), "2D"),
                ("T3DHI3", ("3D TIME SERIES FILE", "FICHIER DES SERIES TEMPORELLES 3D"), "3D"),
            ),
        ),
    ),
    "tomawac": (
        (
            ("TIME SERIES COORDINATES FILE", "FICHIER DE COORDONNEES DES SERIES TEMPORELLES"),
            (("WACHI2", ("TIME SERIES FILE", "FICHIER DES SERIES TEMPORELLES"), ""),),
        ),
    ),
}
# runcode's working folder in the case folder: <cas>_YYYY-MM-DD-HHhMMminSSs, removed at the end of a correct run
# (left after a crash).
WORK_DIR_PATTERN = re.compile(r"\.cas_\d{4}-\d{2}-\d{2}-\d{2}h\d{2}min\d{2}s$")

# Time series of the Probes panel, written as CSV files under MONITOR_DIRNAME in the case folder.
MONITOR_DIRNAME = ".csauto.monitor"
# Their names are what the panel's menu shows (without .csv): physical quantities first, checks after.
FLUXES_SERIES = "Boundary discharges.csv"
SECTIONS_SERIES = "Control section discharges.csv"
VOLUME_SERIES = "Water volume.csv"
TRACERS_SERIES = "Tracer quantities.csv"
COURANT_SERIES = "Courant number.csv"
VOLUME_ERROR_SERIES = "Water volume error.csv"
TRACER_ERRORS_SERIES = "Tracer balance errors.csv"
SOLVERS_SERIES = "Solver iterations (diagnostics).csv"
PROBES_SERIES_SUFFIX = " at probes"
# A file keyword whose unquoted value holds a "/", which TELEMAC reads as a comment.
UNQUOTED_PATH_PATTERN = re.compile(
    r"^[ \t]*(?:[^=:/'\"\n]*\bFILE|FICHIER\b[^=:/'\"\n]*)[ \t]*[=:][ \t]*([^'\"\s/]*/\S*)", re.M
)
VALUE = r"('(?:[^']|'')*'|\"[^\"]*\"|[^\s;]+)"

OUTCOME_SUCCESS_PATTERNS = (re.compile(r"^My work is done", re.M),)
OUTCOME_FAILURE_PATTERNS = (
    re.compile(r"could not complete my work"),
    re.compile(r"TelemacException"),
    re.compile(r"PLANTE: PROGRAM STOPPED"),
)


def strip_cas_comments(text: str) -> str:
    """The steering file without comments and `&` commands, quotes kept.

    `/` opens a comment outside quotes, and a second `/` on the same line
    closes it. Quoted values may span lines, and `''` is a quote inside one.
    """
    out: list[str] = []
    quote = ""
    for raw_line in text.splitlines():
        if not quote and raw_line.lstrip().startswith("&"):
            out.append("")
            continue
        line: list[str] = []
        in_comment = False
        index = 0
        while index < len(raw_line):
            char = raw_line[index]
            if quote:
                line.append(char)
                if char == quote:
                    if raw_line[index + 1 : index + 2] == quote:
                        line.append(quote)
                        index += 1
                    else:
                        quote = ""
            elif char == "/":
                in_comment = not in_comment
            elif not in_comment:
                line.append(char)
                if char in "'\"":
                    quote = char
            index += 1
        out.append("".join(line))
    return "\n".join(out)


def _keyword_regex(keyword: str) -> str:
    return r"[ \t]+".join(re.escape(word) for word in keyword.split())


def _keyword_pattern(keywords: str) -> re.Pattern[str]:
    return re.compile(rf"(?:^|;)[ \t]*(?:{keywords})[ \t]*\n?[ \t]*[=:][ \t\n]*{VALUE}", re.M)


def _unquote(value: str) -> str:
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "'\"":
        return value[1:-1].replace(value[0] * 2, value[0]).strip()
    return value.strip()


def cas_value(cleaned: str, *keywords: str) -> str | None:
    """The value of the first of `keywords` set in a comment-stripped steering file."""
    for keyword in keywords:
        match = _keyword_pattern(_keyword_regex(keyword)).search(cleaned)
        if match:
            return _unquote(match.group(1))
    return None


# A keyword at the start of a line or after ";", before its "=" or ":" (on the same line or the next).
KEYWORD_NAME_PATTERN = re.compile(r"(?:^|;)[ \t]*([A-Z0-9][^=:;'\"\n]*?)[ \t]*\n?[ \t]*[=:]", re.M)


def cas_keywords(cleaned: str) -> set[str]:
    """The keyword names a comment-stripped steering file sets, spaces normalized."""
    return {" ".join(name.split()) for name in KEYWORD_NAME_PATTERN.findall(cleaned)}


def has_keyword(cleaned: str, keyword: str) -> bool:
    return cas_value(cleaned, keyword) is not None


def coupled_steering_files(cleaned: str) -> list[str]:
    """Steering files of the modules coupled to this one, as written in it."""
    return [_unquote(match.group(1)) for match in _keyword_pattern(COUPLED_FILE_KEYWORD).finditer(cleaned)]


def _read_cas(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def detect_module(cas_path: Path, chosen: str | None = None) -> tuple[str, str]:
    """(module, how it was found) for a main steering file; ValueError when nothing tells.

    `chosen` is the module chosen for the campaign (its TELEMAC module menu): it wins. Else the
    file's keywords, then its name.
    """
    if chosen:
        if chosen not in RUNNABLE_MODULES:
            raise ValueError(f"Unknown TELEMAC module {chosen!r} (expected {', '.join(RUNNABLE_MODULES)}).")
        return chosen, "chosen"
    cleaned = strip_cas_comments(_read_cas(cas_path))
    used = cas_keywords(cleaned)
    scores = {module: len(used & keywords) for module, keywords in UNIQUE_KEYWORDS.items()}
    best = max(scores.values())
    leaders = [module for module, score in scores.items() if score == best]
    if best and len(leaders) == 1:
        if leaders[0] not in RUNNABLE_MODULES:
            raise ValueError(
                f"{cas_path.name} is a {leaders[0].upper()} steering file, which runs coupled to TELEMAC-2D or "
                "TELEMAC-3D: make the TELEMAC-2D or TELEMAC-3D steering file the main one."
            )
        return leaders[0], "keywords"
    prefix = cas_path.name.split("_", 1)[0].lower()
    if "_" in cas_path.name and prefix in FILE_PREFIXES:
        return FILE_PREFIXES[prefix], "file name"
    if not best and any(has_keyword(cleaned, keyword) for keyword in COUPLING_KEYWORDS):
        return "telemac2d", "keywords"
    raise ValueError(f"{UNDETECTED_PREFIX} {cas_path.name}: {OVERRIDE_HINT}.")


def _number(value: str | None) -> float | None:
    try:
        return float(value.replace("D", "E").replace("d", "e")) if value else None
    except ValueError:
        return None


def simulated_duration(cas_path: Path) -> float | None:
    """The time a steering file asks TELEMAC to simulate, in seconds (None when it does not say)."""
    cleaned = strip_cas_comments(_read_cas(cas_path))
    duration = _number(cas_value(cleaned, *DURATION_KEYWORDS))
    if duration:
        return duration
    steps = _number(cas_value(cleaned, *TIME_STEP_COUNT_KEYWORDS))
    time_step = _number(cas_value(cleaned, *TIME_STEP_KEYWORDS))
    return steps * time_step if steps and time_step else None


def _without_keywords(text: str, keywords: Iterable[str]) -> str:
    """The steering file without the lines setting `keywords` (the restart copy sets them again)."""
    alternatives = "|".join(_keyword_regex(keyword) for keyword in keywords)
    return re.sub(rf"^[ \t]*(?:{alternatives})[ \t]*[=:][^\n]*\n?", "", text, flags=re.M)


def format_duration(seconds: float, unit: tuple[float, str]) -> str:
    return f"{seconds / unit[0]:.3g}"


def progress_label(done: float, total: float) -> str:
    """ "12.5 / 30 d (42 %)": the simulated time reached and the time to simulate, in one unit."""
    unit = next((u for u in TIME_UNITS if total >= 2 * u[0]), TIME_UNITS[-1])
    percent = 100.0 * done / total
    return f"{format_duration(done, unit)} / {format_duration(total, unit)} {unit[1]} ({percent:.0f} %)"


def coupling_notes(cas_path: Path) -> list[SetupNote]:
    """The modules a main steering file is coupled with, and what would stop TELEMAC running them.

    As runcode does, a module is coupled when its name is in COUPLING WITH
    (``'GAIA,TOMAWAC'``, ``TOMAWACT3D`` counts as TOMAWAC), and its steering
    file is the one its ``<MODULE> STEERING FILE`` keyword names, relative to
    the main steering file.
    """
    cleaned = strip_cas_comments(_read_cas(cas_path))
    coupling = (cas_value(cleaned, *COUPLING_KEYWORDS) or "").lower()
    coupled = [module for module in COUPLED_MODULES if module in coupling]
    found: list[str] = []
    notes: list[SetupNote] = []
    for module, keywords in COUPLED_MODULES.items():
        name = cas_value(cleaned, *keywords) if keywords else None
        if module not in coupled:
            if name:
                notes.append(
                    SetupNote(
                        "warn",
                        f"{cas_path.name} names {name} as {keywords[0]}, but COUPLING WITH does not name "
                        f"{module.upper()}: TELEMAC will not run it.",
                    )
                )
            continue
        if not keywords:
            found.append(module.upper())
        elif not name:
            notes.append(
                SetupNote(
                    "error",
                    f"{cas_path.name} is coupled with {module.upper()} (COUPLING WITH) but sets no {keywords[0]}: "
                    "TELEMAC will stop.",
                )
            )
        elif not (cas_path.parent / name).is_file():
            notes.append(
                SetupNote(
                    "error",
                    f"{cas_path.name} names {name} as {keywords[0]}, which is not in the case: "
                    "add it with the other steering files.",
                )
            )
        else:
            found.append(f"{module.upper()} ({name})")
    if found:
        notes.insert(0, SetupNote("info", f"Coupled with {', '.join(found)}."))
    return notes


def _redirect_results(text: str) -> str:
    """The steering file with its result files moved under RESU/ (keywords at the start of a line only)."""
    keywords = "|".join(_keyword_regex(keyword) for keyword in RESULT_KEYWORDS)
    pattern = re.compile(rf"^([ \t]*(?:{keywords})[ \t]*[=:][ \t]*){VALUE}", re.M)

    def redirect(match: re.Match[str]) -> str:
        name = _unquote(match.group(2))
        if name.startswith("RESU/") and match.group(2)[0] in "'\"":
            return match.group(0)  # unquoted, TELEMAC would read RESU/r2d.slf as RESU ("/" starts a comment)
        return f"{match.group(1)}'RESU/{Path(name).name}'"

    return pattern.sub(redirect, text)


def probe_names(coordinates: Path) -> list[str]:
    """The points of a TIME SERIES COORDINATES FILE, by their name (else "point <number>"), in file order.

    Its first line gives the number of periods and of points, the periods follow (start, end, interval),
    then one line per point: x, y, station number, station name. TELEMAC reads each line as Fortran
    list-directed input: the name is one word, or a quoted string, and the rest of the line is ignored.
    """
    lines = [_fortran_items(line) for line in coordinates.read_text(encoding="utf-8", errors="replace").splitlines()]
    lines = [items for items in lines if items]
    periods, points = int(lines[0][0]), int(lines[0][1])
    names = []
    for index, items in enumerate(lines[1 + periods : 1 + periods + points], start=1):
        number = items[2] if len(items) > 2 else str(index)
        names.append(items[3] if len(items) > 3 and items[3] else f"point {number}")
    return names


FORTRAN_ITEM = re.compile(r"'((?:[^']|'')*)'|\"([^\"]*)\"|(/)|([^\s,/'\"]+)")


def _fortran_items(line: str) -> list[str]:
    """The values of a Fortran list-directed line: separated by blanks or commas, quoted or not, up to a "/"."""
    items = []
    for single, double, slash, bare in FORTRAN_ITEM.findall(line):
        if slash:
            break
        items.append(single.replace("''", "'").strip() or double.strip() or bare)
    return items


def written_files(case_dir: Path, work_name: str, final_name: str | None) -> list[Path]:
    """An output file as TELEMAC writes it: in runcode's working folder during a run (one file per
    partition in parallel, T2DHI100001-00000...), else the final file the steering file names.

    The final file wins over an older working folder: a stopped or crashed run leaves its folder behind.
    """
    try:
        work_dirs = [path for path in case_dir.iterdir() if path.is_dir() and WORK_DIR_PATTERN.search(path.name)]
        work_dir = max(work_dirs, key=lambda path: path.stat().st_mtime, default=None)
        final = safe_subpath(case_dir, final_name) if final_name else None
        if final and final.is_file() and (work_dir is None or final.stat().st_mtime >= work_dir.stat().st_mtime):
            return [final]
        if work_dir is not None:
            single = work_dir / work_name
            if single.is_file():
                return [single]
            parts = sorted(work_dir.glob(f"{work_name}{'[0-9]' * 5}-{'[0-9]' * 5}"))
            if parts:
                # T2DHI100003-00000 ... T2DHI100003-00003: wait until every partition exists.
                expected = int(parts[0].name[len(work_name) : len(work_name) + 5]) + 1
                return parts if len(parts) == expected else []
    except OSError:
        pass
    return []


def _probe_label(number: int, names: Sequence[str], planes: bool) -> str:
    """A value's global number in a time series file: point by point, plane by plane from the bottom in 3D."""
    name = column_name(names[(number - 1) % len(names)])
    return f"{name}_plane{(number - 1) // len(names) + 1}" if planes else name


def time_series_tables(case_dir: Path, cas: Path, module: str) -> dict[str, tuple[list[str], list[dict[str, str]]]]:
    """The steering file's TELEMAC time series, as tables by name: one per variable, a column per point.

    A 3D file has every point on every plane, plane by plane from the bottom: "inlet_plane2".
    """
    cleaned = strip_cas_comments(_read_cas(cas))
    tables: dict[str, tuple[list[str], list[dict[str, str]]]] = {}
    for coordinate_keywords, outputs in TIME_SERIES.get(module, ()):
        coordinates_name = cas_value(cleaned, *coordinate_keywords)
        coordinates = safe_subpath(case_dir, coordinates_name) if coordinates_name else None
        if not coordinates or not coordinates.is_file():
            continue
        try:
            names = probe_names(coordinates)
        except (OSError, ValueError, IndexError):
            continue
        for work_name, file_keywords, which in outputs:
            files = written_files(case_dir, work_name, cas_value(cleaned, *file_keywords))
            # In parallel, a process with no point in its part of the mesh leaves its file empty.
            ready: list[Path] = []
            numbers: set[int] = set()
            for path in files:
                with contextlib.suppress(OSError), path.open("rb") as handle:
                    header = read_header(handle)
                    if header is not None:
                        ready.append(path)
                        found = [number for number in read_ipobo(handle, header) if number > 0]
                        # Without global numbers (a single file only), its values are in point order.
                        numbers.update(found if len(found) == header.npoin else range(1, header.npoin + 1))
            if not ready:
                continue
            try:
                signature = (tuple(names), *((str(path), *_file_state(path)) for path in ready))
            except OSError:
                continue
            cache_key = (str(case_dir), work_name)
            with _TABLES_LOCK:
                cached = _TABLES.get(cache_key)
            if cached is not None and cached[0] == signature:
                tables.update(cached[1])
                continue
            data = read_node_series(ready, sorted(numbers))
            if not data or not data.times:
                continue
            labels = {number: _probe_label(number, names, max(numbers) > len(names)) for number in data.nodes}
            columns = ["time", *labels.values()]
            built = {}
            for variable in data.variables:
                values = data.values[variable]
                name = _series_name(variable) + PROBES_SERIES_SUFFIX + (f" ({which})" if which else "") + ".csv"
                # While TELEMAC writes, only the new time steps need rows: keep the earlier ones.
                previous = cached[1].get(name) if cached is not None else None
                rows = list(previous[1]) if previous and previous[0] == columns else []
                if len(rows) > len(data.times):
                    rows = []
                rows += [
                    {"time": repr(time), **{labels[number]: repr(values[number][index]) for number in data.nodes}}
                    for index, time in enumerate(data.times[len(rows) :], start=len(rows))
                ]
                built[name] = (columns, rows)
            with _TABLES_LOCK:
                _TABLES[cache_key] = (signature, built)
                _TABLES.move_to_end(cache_key)
                while len(_TABLES) > _MAX_CACHED_TABLES:
                    _TABLES.popitem(last=False)
            tables.update(built)
    return tables


# The tables of a time series file, kept until TELEMAC writes to it: the Probes panel asks for them on every refresh.
_TABLES: OrderedDict[tuple[str, str], tuple[tuple, dict[str, tuple[list[str], list[dict[str, str]]]]]] = OrderedDict()
_TABLES_LOCK = threading.Lock()
_MAX_CACHED_TABLES = 64


def _file_state(path: Path) -> tuple[int, int, int]:
    stat = path.stat()
    return stat.st_ino, stat.st_size, stat.st_mtime_ns


def _series_name(variable: str) -> str:
    """ "Velocity U" for TELEMAC's "VELOCITY U": readable, one-letter words in capitals."""
    words = [word.upper() if len(word) == 1 else word.lower() for word in re.split(r"[^A-Za-z0-9]+", variable) if word]
    label = " ".join(words)
    return label[:1].upper() + label[1:]


def _listing_tables(listing: ListingSummary) -> dict[str, tuple[list[str], list[dict[str, str]]]]:
    """The listing's time series, physical quantities first, then the balance checks, then diagnostics."""
    tables = {}
    if listing.fluxes:
        fluxes = {f"boundary {number} (m3/s)": points for number, points in listing.fluxes.items()}
        tables[FLUXES_SERIES] = series_table(fluxes)
    if listing.sections:
        tables[SECTIONS_SERIES] = series_table({f"{name} (m3/s)": points for name, points in listing.sections.items()})
    if listing.volume:
        tables[VOLUME_SERIES] = series_table({"volume in the domain (m3)": listing.volume})
    if listing.tracer_quantities:
        quantities = {f"tracer {number}": points for number, points in listing.tracer_quantities.items()}
        tables[TRACERS_SERIES] = series_table(quantities)
    if listing.courant:
        tables[COURANT_SERIES] = series_table({"maximum Courant number": listing.courant})
    volume = {}
    if listing.volume_error:
        volume["relative error in volume"] = listing.volume_error
    if listing.volume_step_error:
        volume["volume error during the time step (m3)"] = listing.volume_step_error
    if volume:
        tables[VOLUME_ERROR_SERIES] = series_table(volume)
    if listing.tracer_errors:
        errors = {f"tracer {number} relative error": points for number, points in listing.tracer_errors.items()}
        tables[TRACER_ERRORS_SERIES] = series_table(errors)
    if listing.solvers:
        tables[SOLVERS_SERIES] = series_table(listing.solvers)
    return tables


def _write_if_changed(path: Path, columns: Sequence[str], rows: Sequence[Mapping[str, str]]) -> None:
    import csv
    import io

    buffer = io.StringIO()
    writer = csv.DictWriter(buffer, fieldnames=list(columns), lineterminator="\n")
    writer.writeheader()
    writer.writerows(rows)
    text = buffer.getvalue()
    with contextlib.suppress(OSError):
        if path.read_text(encoding="utf-8") == text:
            return
    path.parent.mkdir(exist_ok=True)
    temporary = path.with_name(f".{path.name}.{os.getpid()}.tmp")
    temporary.write_text(text, encoding="utf-8")
    os.replace(temporary, path)  # readers never see a half-written file


def _cas_files(folder: Path) -> list[Path]:
    return sorted(p for p in folder.glob(CAS_GLOB) if p.is_file() and not p.name.startswith("."))


class TelemacAdapter(SolverAdapter):
    name: ClassVar[str] = "openTELEMAC"
    description: ClassVar[str] = "Free-surface flows: hydrodynamics, sediment transport, waves and water quality"
    example_dir: ClassVar[str] = "telemac2d-node-by-node"
    case_inputs: ClassVar[tuple[CaseInput, ...]] = (
        CaseInput(
            "cas",
            "Steering files",
            (".cas",),
            "TEMPLATE",
            multiple=True,
            hint="The main .cas, plus those of coupled modules. Result files are moved under RESU/.",
        ),
        CaseInput(
            "inputs",
            "Input files",
            (".slf", ".srf", ".med", ".cli", ".bnd", ".txt", ".liq", ".f", ".f90", ".F", ".csv", ".xml"),
            "TEMPLATE",
            required=False,
            multiple=True,
            hint="Geometry, boundary conditions, liquid boundaries, user Fortran: every file the .cas names.",
        ),
    )
    case_options: ClassVar[tuple[CaseOption, ...]] = (
        CaseOption(
            "module",
            "TELEMAC module",
            RUNNABLE_MODULES,
            hint="Detected from the steering file unless you choose one.",
            automatic_label="Detect automatically",
        ),
    )
    native_bin_name: ClassVar[str] = "runcode.py"
    container_bin_name: ClassVar[str] = "runcode.py"
    default_docker_image: ClassVar[str] = "simvia/opentelemac:v9.1.0"
    results_dirname: ClassVar[str] = "RESU"
    restart_modes: ClassVar[tuple[RestartMode, ...]] = (
        RestartMode("simulated_time", "Additional simulated time", "Time (s)", "float"),
        RestartMode("time_steps", "Additional time steps", "Time steps"),
    )
    dashboard_panels: ClassVar[tuple[str, ...]] = ("status", "probes", "performance", "compare", "tail", "errors")
    # Large meshes can sit next to TEMPLATE, named in quotes as '../MESH/geo.slf' ("/" starts a comment).
    shared_dir_names: ClassVar[tuple[str, ...]] = ("MESH",)
    readonly_shared_dir_names: ClassVar[frozenset[str]] = frozenset({"MESH"})
    tail_file_names: ClassVar[tuple[str, ...]] = (LISTING_NAME, "csauto.stderr")
    anomaly_patterns: ClassVar[tuple[tuple[str, re.Pattern[str]], ...]] = (
        ("error", re.compile(r"PLANTE: PROGRAM STOPPED|could not complete my work|TelemacException")),
        ("warn", re.compile(r"MAXIMUM NUMBER OF ITERATIONS|EXCEEDING MAXIMUM ITERATIONS")),
    )
    # Mass and tracer balances ("RELATIVE ERROR IN VOLUME AT T = ...", "ERROR ON THE VOLUME DURING THIS
    # TIME STEP : ..."), printed every listing period, TELEMAC's own checks that passed, mesh titles,
    # and gfortran's note on floating-point underflows after a correct end of run.
    anomaly_ignore_patterns: ClassVar[tuple[re.Pattern[str], ...]] = (
        re.compile(r"^\s*RELATIVE ERROR\b"),
        re.compile(r"^\s*ERROR ON THE \w+ DURING THIS TIME STEP\b"),
        re.compile(r"NO ERROR HAS BEEN DETECTED"),
        re.compile(r"^\s*-+\s*error analysis\s*-+\s*$"),
        re.compile(r"^\s*READ_MESH_INFO: TITLE="),
        re.compile(r"floating-point exceptions are signalling"),
    )
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = (
        CompareKind("cas", "Steering file"),
        CompareKind("doe_row.csv", "doe_row.csv"),
    )
    performance_columns: ClassVar[tuple[PerfColumn, ...]] = (
        PerfColumn("module", "Module", "text"),
        PerfColumn("elapsed_time", "Elapsed (s)", "time"),
        PerfColumn("time_steps", "Last Time Step", "int"),
        PerfColumn("simulated_time", "Simulated Time (s)", "float"),
    )
    logo_file: ClassVar[Path | None] = LOGOS / "opentelemac.svg"
    logo_dark_file: ClassVar[Path | None] = LOGOS / "opentelemac_dark.svg"
    icon_file: ClassVar[Path | None] = LOGOS / "opentelemac_icon.svg"

    # Launch.

    def _module(self, case_dir: Path, cas: Path) -> tuple[str, str]:
        return detect_module(cas, self.campaign_settings(case_dir).get("module"))

    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        cas = self.find_setup_file(case_dir)
        module, _how = self._module(case_dir, cas)
        extra = [str(arg) for arg in run_args or () if str(arg) != ""]
        # A restart runs the copy build_restart_args wrote, with the main steering file's module.
        cas_name = extra.pop(0) if extra[:1] == [RESTART_CAS_NAME] else cas.name
        return [module, "--ncsize", str(nprocs), "--mpi", *extra, cas_name]

    def build_restart_args(
        self,
        case_dir: Path,
        restart_mode: str | None,
        restart_value: int | float | None,
        restart_path: str | None,
    ) -> tuple[list[str], dict[str, Any]]:
        """Write RESTART_CAS_NAME: the main steering file, continued from its last results for the time asked."""
        if (restart_path or "").strip().strip("/") not in ("", self.results_dirname):
            raise ValueError(f"{case_dir.name} keeps its results in {self.results_dirname}/: restart from there.")
        cas = self.find_setup_file(case_dir)
        module, _how = self._module(case_dir, cas)
        if module not in RESTART_SOURCES:
            raise ValueError(f"csauto restarts TELEMAC-2D and TELEMAC-3D cases, not {module.upper()} ones.")
        text = _read_cas(cas)
        cleaned = strip_cas_comments(text)
        if cas_value(cleaned, *COUPLING_KEYWORDS):
            raise ValueError(f"{cas.name} is coupled with other modules (COUPLING WITH): csauto cannot restart it.")
        source = file_format = None
        for file_keywords, format_keywords in RESTART_SOURCES[module]:
            name = cas_value(cleaned, *file_keywords)
            path = safe_subpath(case_dir, name) if name else None
            if path and path.is_file() and path.stat().st_size:
                source, file_format = name, cas_value(cleaned, *format_keywords)
                break
        if source is None:
            raise ValueError(f"{case_dir.name} has no results to restart from: run it first.")
        replaced = [*PREVIOUS_FILE_KEYWORDS, *PREVIOUS_FORMAT_KEYWORDS, *RESTART_RECORD_KEYWORDS, *TIME_ZERO_KEYWORDS]
        quoted = source.replace("'", "''")
        lines = [
            f"/ Written by csauto: {cas.name} continued from its last results.",
            f"PREVIOUS COMPUTATION FILE = '{quoted}'",
            *([f"PREVIOUS COMPUTATION FILE FORMAT = '{file_format}'"] if file_format else []),
            "RECORD NUMBER FOR RESTART = -1",
            "INITIAL TIME SET TO ZERO = NO",
        ]
        details: dict[str, Any] = {"restart": True, "restart_from": source}
        if restart_mode in ("simulated_time", "time_steps"):
            if restart_value is None:
                raise ValueError("Give the time to add to the run.")
            replaced += [*DURATION_KEYWORDS, *TIME_STEP_COUNT_KEYWORDS]
            # TELEMAC runs max(NUMBER OF TIME STEPS, DURATION / TIME STEP) steps from where it restarts.
            if restart_mode == "simulated_time":
                lines += [f"DURATION = {float(restart_value)!r}", "NUMBER OF TIME STEPS = 0"]
                details["restart_simulated_time"] = float(restart_value)
            else:
                lines += [f"NUMBER OF TIME STEPS = {int(restart_value)}", "DURATION = 0."]
                details["restart_time_steps"] = int(restart_value)
        body = _without_keywords(text, replaced).rstrip("\n")
        (case_dir / RESTART_CAS_NAME).write_text(f"{body}\n" + "\n".join(lines) + "\n", encoding="utf-8")
        return [RESTART_CAS_NAME], details

    def _launched_cas(self, case_dir: Path) -> Path:
        """The steering file the latest run started: the restart copy when it was a restart."""
        runs = read_history(case_dir, limit=1, include_actions={"run"})
        restart = case_dir / RESTART_CAS_NAME
        if runs and (runs[-1].get("details") or {}).get("restart") and restart.is_file():
            return restart
        return self.find_setup_file(case_dir)

    def prepare_launch(self, case_dir: Path, nprocs: int, nt: int) -> None:
        self.results_root(case_dir).mkdir(exist_ok=True)

    def setup_warnings(self, setup_file: Path) -> list[str]:
        if setup_file.suffix != ".cas":
            return []
        text = _read_cas(setup_file)
        cleaned = strip_cas_comments(text)
        warnings = [
            f"{setup_file.name}: put {path} in quotes ('{path}'): in a .cas file, / starts a comment."
            for path in UNQUOTED_PATH_PATTERN.findall(text)
        ]
        processors = cas_value(cleaned, *PARALLEL_KEYWORDS)
        if processors not in (None, "0", "1"):
            warnings.append(
                f"{setup_file.name} sets PARALLEL PROCESSORS = {processors}: ignored, n sets the number of processes."
            )
        return warnings

    def setup_notes(self, setup_file: Path, settings: Mapping[str, str] | None = None) -> list[SetupNote]:
        if setup_file.suffix != ".cas":
            return []
        if settings is None:
            settings = self.campaign_settings(setup_file.parent)
        notes = [*self._module_notes(setup_file, settings.get("module")), *coupling_notes(setup_file)]
        # A note, not a setup warning: New Campaign checks the files you pick before csauto moves their results
        # under RESU/ in its copy, and the notes are about that copy.
        results = cas_value(strip_cas_comments(_read_cas(setup_file)), *RESULT_KEYWORDS)
        if results and not results.startswith("RESU/"):
            notes.append(
                SetupNote(
                    "warn",
                    f"{setup_file.name} writes its results outside RESU/ ({results}): the runs work and the "
                    f"dashboard follows them, but Clean will not delete these files and Results (MB) will not count "
                    f"them. To change it, write 'RESU/{Path(results).name}' in {setup_file.name}.",
                )
            )
        return notes

    def _module_notes(self, setup_file: Path, chosen: str | None) -> list[SetupNote]:
        try:
            module, how = detect_module(setup_file, chosen)
        except ValueError as error:
            if not str(error).startswith(UNDETECTED_PREFIX):
                return [SetupNote("error", str(error))]  # a coupled module's file, or an unknown chosen module
            return [
                SetupNote(
                    "error",
                    f"TELEMAC module not detected in {setup_file.name}: choose it in the TELEMAC module menu.",
                )
            ]
        if how in DETECTION_SOURCES:
            return [
                SetupNote(
                    "info",
                    f"TELEMAC module: {module} (detected automatically {DETECTION_SOURCES[how]}).",
                )
            ]
        return [SetupNote("info", f"TELEMAC module: {module} (chosen).")]

    def assemble_case(self, campaign_dir: Path, files: Mapping[str, Sequence[Path]]) -> None:
        super().assemble_case(campaign_dir, files)
        for picked in files.get("cas", ()):
            cas = campaign_dir / "TEMPLATE" / Path(picked).name
            text = _read_cas(cas)
            cas.write_text(_redirect_results(text), encoding="utf-8")

    # Files and results layout.

    def find_setup_file(self, template_dir: Path) -> Path:
        """The main steering file: the only .cas no other .cas names as a coupled module's."""
        candidates = _cas_files(Path(template_dir))
        if not candidates:
            raise FileNotFoundError(f".cas steering file not found in {template_dir}")
        if len(candidates) == 1:
            return candidates[0]
        coupled = {
            Path(name).name for cas in candidates for name in coupled_steering_files(strip_cas_comments(_read_cas(cas)))
        }
        mains = [cas for cas in candidates if cas.name not in coupled]
        if len(mains) == 1:
            return mains[0]
        names = ", ".join(p.name for p in mains or candidates)
        raise ValueError(
            f"Several main .cas files in {template_dir} ({names}): keep one, or name the others as coupled steering files."
        )

    def list_run_dirs(self, case_dir: Path, *, newest_first: bool = True) -> list[Path]:
        results_root = self.results_root(case_dir)
        return [results_root] if results_root.is_dir() else []

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        if name == "cas":
            try:
                return self.find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                return None
        return super().locate_case_file(case_dir, name)

    # Run state.

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        return scan_outcome(
            [case_dir / LISTING_NAME, case_dir / "csauto.stderr"],
            start_time,
            OUTCOME_SUCCESS_PATTERNS,
            OUTCOME_FAILURE_PATTERNS,
            self.anomaly_ignore_patterns,
            lines=200,
        )

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]:
        """The simulated time the latest run continued from, when it was a csauto restart.

        A steering file may itself continue an earlier computation (PREVIOUS COMPUTATION FILE, FILE FOR 2D
        CONTINUATION...) and start later than 0: that is not a restart.
        """
        if self._launched_cas(case_dir).name != RESTART_CAS_NAME:
            return {}
        listing = read_listing(case_dir / LISTING_NAME)
        return {"time": listing.first_time} if listing and listing.first_time else {}

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        listing = read_listing(case_dir / LISTING_NAME)
        return listing.iteration if listing else None

    def read_simulation_progress(self, case_dir: Path, start_time: str | None = None) -> SimulationProgress | None:
        listing = read_listing(case_dir / LISTING_NAME)
        if not listing or listing.time is None or listing.first_time is None:
            return None
        try:
            total = simulated_duration(self._launched_cas(case_dir))
        except (OSError, ValueError):
            return None
        if not total:
            return None
        done = min(max(listing.time - listing.first_time, 0.0), total)
        return SimulationProgress(done / total, progress_label(done, total))

    # Analytics: the Probes panel plots TELEMAC's time series files and its listing, against the simulated time.

    def monitor_tables(self, case_dir: Path) -> dict[str, tuple[list[str], list[dict[str, str]]]]:
        """Time series by name: TELEMAC's own probes (TIME SERIES FILE) first, then the listing's."""
        listing = read_listing(case_dir / LISTING_NAME)
        listing_tables = _listing_tables(listing) if listing else {}
        try:
            cas = self.find_setup_file(case_dir)
            module, _how = self._module(case_dir, cas)
            probes = time_series_tables(case_dir, cas, module)
        except (OSError, ValueError):
            return listing_tables
        return {**probes, **listing_tables}

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return list(self.monitor_tables(case_dir))[:limit]

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
        table = self.monitor_tables(case_dir).get(probe_ref)
        if table is None:
            return []
        path = case_dir / MONITOR_DIRNAME / probe_ref
        try:
            _write_if_changed(path, *table)
        except OSError:
            return [path] if path.is_file() else []
        return [path]

    def find_performance_log(self, case_dir: Path) -> Path | None:
        listing = case_dir / LISTING_NAME
        return listing if listing.is_file() and listing.stat().st_size else None

    def parse_performance(self, path: Path) -> dict[str, str | None]:
        values: dict[str, str | None] = dict.fromkeys(self.performance_fields, None)
        with contextlib.suppress(FileNotFoundError, ValueError):
            values["module"] = self._module(path.parent, self.find_setup_file(path.parent))[0]
        listing = read_listing(path)
        if listing:
            if listing.elapsed_seconds is not None:
                values["elapsed_time"] = str(listing.elapsed_seconds)
            if listing.iteration is not None:
                values["time_steps"] = str(listing.iteration)
            if listing.time is not None:
                values["simulated_time"] = repr(listing.time)
        return values

    def doctor_checks(
        self,
        runs_dir: Path,
        case_dirs: Sequence[Path],
        *,
        runtime: str | None = None,
        solver_bin: str | None = None,
        singularity_image: str | None = None,
        singularity_bin: str | None = None,
    ) -> list[DoctorItem]:
        from ...maintenance import DoctorItem

        items = super().doctor_checks(runs_dir, case_dirs, runtime=runtime)
        modules: Counter[str] = Counter()
        problems: list[str] = []
        for case_dir in case_dirs:
            try:
                module, how = self._module(case_dir, self.find_setup_file(case_dir))
            except FileNotFoundError:
                continue  # reported by the setup file check
            except ValueError as error:
                problems.append(f"{case_dir.name}: {error}")
                continue
            modules[f"{module} ({how})"] += 1
        if modules:
            found = ", ".join(f"{label} x{count}" for label, count in sorted(modules.items()))
            items.append(DoctorItem(level="ok", message=f"TELEMAC module: {found}"))
        # A warning, not a failure: the dashboard must still open to say so (csauto serve stops on failures).
        items.extend(DoctorItem(level="warn", message=problem) for problem in _first(problems, 5))
        return items


def _first(items: Iterable[str], limit: int) -> list[str]:
    items = list(items)
    if len(items) > limit:
        return [*items[:limit], f"... and {len(items) - limit} more"]
    return items


__all__ = ["TelemacAdapter", "detect_module", "probe_names", "strip_cas_comments", "time_series_tables"]
