"""The openTELEMAC adapter: steering file reading, module detection, listing parsing."""

from __future__ import annotations

from pathlib import Path

import pytest

from csauto.registry import STATUS_DONE, STATUS_FAILED, write_campaign_settings
from csauto.solvers import get_solver_adapter
from csauto.solvers.telemac.adapter import cas_value, detect_module, probe_names, strip_cas_comments
from csauto.solvers.telemac.listing import read_listing

LISTING = """\
 ITERATION        0    TIME:   0.0000 S
================================================================================
 ITERATION       50    TIME:   5.0000 S
--------------------------------------------------------------------------------
                  DIFFUSION-PROPAGATION STEP
 EQUNOR (BIEF) :        6 ITERATIONS, ABSOLUTE PRECISION:   0.7991976E-04
 POSITIVE DEPTHS OBTAINED IN     1 ITERATIONS
 GMRES (BIEF) :       12 ITERATIONS, RELATIVE PRECISION:   0.1000000E-08
 GMRES (BIEF) :        3 ITERATIONS, RELATIVE PRECISION:   0.2000000E-09
     RELATIVE ERROR IN VOLUME AT T =        5.000     S :   -0.1771512E-14
================================================================================
 ITERATION      100    TIME:  1 MN 40.0000 S   (    100.0000 S)
 EQUNOR (BIEF) :        5 ITERATIONS, ABSOLUTE PRECISION:   0.6979803E-04
 CORRECT END OF RUN
 ELAPSE TIME :
STOP 0
                                1  HOURS
                                2  MINUTES
                               12  SECONDS
My work is done
"""


@pytest.fixture()
def adapter():
    return get_solver_adapter("openTELEMAC")


def write(path: Path, text: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    return path


class TestSteeringFileReader:
    def test_comments_and_commands_are_removed(self):
        text = "/ a comment\nTITLE = 'A / B' / trailing\n/ inline / NUMBER OF TIME STEPS = 5\n&ETA\n"
        cleaned = strip_cas_comments(text)
        assert cas_value(cleaned, "TITLE") == "A / B"
        assert cas_value(cleaned, "NUMBER OF TIME STEPS") == "5"
        assert "&ETA" not in cleaned

    def test_values_with_colon_quotes_and_next_line(self):
        cleaned = strip_cas_comments("RESULTS FILE : \"r2d.slf\"\nTITLE =\n  'IT''S'\nGEOMETRY FILE = geo.slf\n")
        assert cas_value(cleaned, "RESULTS FILE") == "r2d.slf"
        assert cas_value(cleaned, "TITLE") == "IT'S"
        assert cas_value(cleaned, "GEOMETRY FILE") == "geo.slf"

    def test_keyword_is_matched_whole(self):
        cleaned = strip_cas_comments("2D RESULTS FILE = r.slf\n")
        assert cas_value(cleaned, "RESULTS FILE") is None
        assert cas_value(cleaned, "2D RESULTS FILE") == "r.slf"

    def test_unquoted_path_is_cut_by_comments(self):
        # Like TELEMAC: "/" opens a comment and a second "/" closes it, so paths go in quotes.
        assert cas_value(strip_cas_comments("GEOMETRY FILE = ../MESH/geo.slf\n"), "GEOMETRY FILE") == "..geo.slf"


class TestModuleDetection:
    @pytest.mark.parametrize(
        ("text", "module"),
        [
            ("NUMBER OF HORIZONTAL LEVELS = 6\n", "telemac3d"),
            ("NOMBRE DE PLANS HORIZONTAUX = 6\n", "telemac3d"),
            ("NUMBER OF FREQUENCIES = 25\nMINIMAL FREQUENCY = 0.04\n", "tomawac"),
            ("WAVE PERIOD = 8.\n", "artemis"),
            ("VELOCITY DIFFUSIVITY = 1.E-6\n", "telemac2d"),
            ("COEFFICIENT DE DIFFUSION DES VITESSES = 1.E-6\n", "telemac2d"),
            ("COUPLING WITH = 'GAIA'\nGAIA STEERING FILE = 'gai.cas'\n", "telemac2d"),
        ],
    )
    def test_keywords(self, tmp_path, text, module):
        assert detect_module(write(tmp_path / "study.cas", text)) == (module, "keywords")

    def test_steering_file_with_only_common_names(self, tmp_path):
        # No t2d_ prefix: EQUATIONS, TURBULENCE MODEL, IMPLICITATION FOR VELOCITY... exist in TELEMAC-2D only.
        cas = write(
            tmp_path / "study.cas",
            "EQUATIONS : 'SAINT-VENANT FE'\nTIME STEP ={dt}\nTURBULENCE MODEL : 1\n"
            "IMPLICITATION FOR VELOCITY = 0.6\nMASS-BALANCE : YES\n",
        )
        assert detect_module(cas) == ("telemac2d", "keywords")

    def test_coupled_module_steering_file(self, tmp_path):
        cas = write(tmp_path / "study.cas", "CLASSES TYPE OF SEDIMENT = NCO\n")
        with pytest.raises(ValueError, match="GAIA steering file"):
            detect_module(cas)

    def test_tables_come_from_the_dictionaries(self):
        from csauto.solvers.telemac.keywords import UNIQUE_KEYWORDS

        assert "NUMBER OF HORIZONTAL LEVELS" in UNIQUE_KEYWORDS["telemac3d"]
        assert "NOMBRE DE PLANS HORIZONTAUX" in UNIQUE_KEYWORDS["telemac3d"]
        assert "TIME STEP" not in set().union(*UNIQUE_KEYWORDS.values())  # in every module
        assert all(
            names.isdisjoint(other)
            for a, names in UNIQUE_KEYWORDS.items()
            for b, other in UNIQUE_KEYWORDS.items()
            if a != b
        )

    def test_keywords_starting_with_a_digit(self, tmp_path):
        assert detect_module(write(tmp_path / "x.cas", "2D RESULT FILE = 'RESU/r2d.slf'\n")) == (
            "telemac3d",
            "keywords",
        )
        assert detect_module(write(tmp_path / "y.cas", "1D SPECTRA RESULTS FILE = 'RESU/s.slf'\n"))[0] == "tomawac"

    def test_commented_keyword_is_ignored(self, tmp_path):
        cas = write(tmp_path / "t2d_x.cas", "/ NUMBER OF HORIZONTAL LEVELS = 6\nTITLE = 'X'\n")
        assert detect_module(cas) == ("telemac2d", "file name")

    def test_file_name_before_coupling_guess(self, tmp_path):
        cas = write(tmp_path / "t3d_x.cas", "COUPLING WITH = 'KHIONE'\n")
        assert detect_module(cas) == ("telemac3d", "file name")

    def test_chosen_module_wins(self, tmp_path):
        cas = write(tmp_path / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
        assert detect_module(cas, "telemac3d") == ("telemac3d", "chosen")

    def test_unknown_chosen_module(self, tmp_path):
        with pytest.raises(ValueError, match="Unknown TELEMAC module 'gaia'"):
            detect_module(write(tmp_path / "x.cas", "TITLE = 'X'\n"), "gaia")

    def test_a_csauto_comment_is_just_a_comment(self, tmp_path):
        cas = write(tmp_path / "t2d_x.cas", "/ csauto: module = telemac3d\nVELOCITY DIFFUSIVITY = 1.\n")
        assert detect_module(cas) == ("telemac2d", "keywords")

    def test_nothing_tells(self, tmp_path):
        with pytest.raises(ValueError, match="choose it in the TELEMAC module menu"):
            detect_module(write(tmp_path / "study.cas", "TITLE = 'X'\n"))


class TestMainSteeringFile:
    def test_coupled_file_is_not_the_main_one(self, adapter, tmp_path):
        write(tmp_path / "gai_x.cas", "CLASSES TYPE OF SEDIMENT = NCO\n")
        write(tmp_path / "t2d_x.cas", "COUPLING WITH = 'GAIA'\nGAIA STEERING FILE = gai_x.cas\n")
        assert adapter.find_setup_file(tmp_path).name == "t2d_x.cas"

    def test_french_coupled_file(self, adapter, tmp_path):
        write(tmp_path / "a.cas", "COUPLAGE AVEC = 'TOMAWAC'\nFICHIER DES PARAMETRES DE TOMAWAC = 'b.cas'\n")
        write(tmp_path / "b.cas", "NOMBRE DE FREQUENCES = 25\n")
        assert adapter.find_setup_file(tmp_path).name == "a.cas"

    def test_several_main_files(self, adapter, tmp_path):
        write(tmp_path / "a.cas", "TITLE = 'A'\n")
        write(tmp_path / "b.cas", "TITLE = 'B'\n")
        with pytest.raises(ValueError, match=r"a\.cas, b\.cas"):
            adapter.find_setup_file(tmp_path)

    def test_missing(self, adapter, tmp_path):
        with pytest.raises(FileNotFoundError):
            adapter.find_setup_file(tmp_path)


def test_run_argv(adapter, tmp_path):
    write(tmp_path / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
    assert adapter.run_argv(tmp_path, 4, 2) == ["telemac2d", "--ncsize", "4", "--mpi", "t2d_x.cas"]


def test_prepare_launch_creates_resu(adapter, tmp_path):
    adapter.prepare_launch(tmp_path, 1, 1)
    assert (tmp_path / "RESU").is_dir()
    assert adapter.list_run_dirs(tmp_path) == [tmp_path / "RESU"]


class TestSetupWarnings:
    def test_results_outside_resu_and_parallel_processors(self, adapter, tmp_path):
        cas = write(tmp_path / "t2d.cas", "RESULTS FILE = r2d.slf\nPARALLEL PROCESSORS = 4\n")
        [warning] = adapter.setup_warnings(cas)
        assert "n sets the number of processes" in warning
        [note] = [note for note in adapter.setup_notes(cas, {}) if "RESU" in note.text]
        assert note.level == "warn" and "'RESU/r2d.slf'" in note.text

    def test_picked_files_are_moved_under_resu_without_warning(self, tmp_path):
        """New Campaign moves picked files' results under RESU/ in its copy: only a folder start warns."""
        from csauto.new_campaign import case_info, input_warnings, inspect_inputs

        cas = write(tmp_path / "in" / "s.cas", "VELOCITY DIFFUSIVITY = 1.\nRESULTS FILE = 'canal.slf'\n")
        files = {"cas": [cas]}
        assert input_warnings("openTELEMAC", files) == []
        assert not [n for n in inspect_inputs("openTELEMAC", files)["notes"] if "RESU/" in n["text"]]
        assert [n for n in case_info(cas.parent, "openTELEMAC")["notes"] if "RESU/" in n["text"]]

    def test_unquoted_path(self, adapter, tmp_path):
        cas = write(tmp_path / "t2d.cas", "GEOMETRY FILE = ../MESH/geo.slf\nFICHIER DES RESULTATS = 'RESU/r.slf'\n")
        assert adapter.setup_warnings(cas) == [
            "t2d.cas: put ../MESH/geo.slf in quotes ('../MESH/geo.slf'): in a .cas file, / starts a comment."
        ]

    def test_clean_file(self, adapter, tmp_path):
        cas = write(tmp_path / "t2d.cas", "RESULTS FILE = 'RESU/r2d.slf'\nPARALLEL PROCESSORS = 0\n")
        assert adapter.setup_warnings(cas) == []

    def test_other_files_are_not_checked(self, adapter, tmp_path):
        assert adapter.setup_warnings(write(tmp_path / "geo.cli", "RESULTS FILE = x\n")) == []


def test_assemble_case_moves_results_under_resu(adapter, tmp_path):
    source = write(
        tmp_path / "in" / "t2d.cas",
        "RESULTS FILE = r2d.slf / comment\n2D RESULT FILE : 'R/r.slf'\n3D RESULT FILE = RESU/r3d.slf\n",
    )
    geometry = write(tmp_path / "in" / "geo.slf", "x")
    campaign = tmp_path / "campaign"
    adapter.assemble_case(campaign, {"cas": [source], "inputs": [geometry]})
    text = (campaign / "TEMPLATE" / "t2d.cas").read_text(encoding="utf-8")
    assert "RESULTS FILE = 'RESU/r2d.slf' / comment" in text
    assert "2D RESULT FILE : 'RESU/r.slf'" in text
    assert "3D RESULT FILE = 'RESU/r3d.slf'" in text  # unquoted, TELEMAC would read it as RESU
    assert (campaign / "TEMPLATE" / "geo.slf").is_file()


DATA = Path(__file__).resolve().parents[1] / "data" / "telemac"  # listings of real openTELEMAC 9.1 runs


class TestListing:
    def test_telemac2d(self):
        listing = read_listing(DATA / "listing_t2d_gouttedo.log")
        assert (listing.iteration, listing.time, listing.elapsed_seconds) == (100, 4.0, 1)
        assert list(listing.solvers) == ["diffusion-propagation: GMRES (BIEF)"]
        iterations = listing.solvers["diffusion-propagation: GMRES (BIEF)"]
        assert len(iterations) == 10 and iterations[0] == (0.4, 2.0)
        assert len(listing.volume_error) == 10
        assert listing.volume_error[0] == pytest.approx((0.4, -0.3411342e-14))  # signed, as printed

    def test_telemac3d_parallel(self):
        listing = read_listing(DATA / "listing_t3d_gouttedo_p2.log")
        assert (listing.iteration, listing.time) == (100, 4.0)  # "ITERATION 10 TIME 0 D 0 H ...", no colon
        assert set(listing.solvers) == {
            "advection: GRACJG (BIEF)",
            "propagation and diffusion with wave equation: GMRES (BIEF)",
            "dynamic pressure stage: GRACJG (BIEF)",
        }
        assert listing.solvers["dynamic pressure stage: GRACJG (BIEF)"][0] == (0.4, 34.0)
        assert len(listing.volume_step_error) == 10
        assert listing.volume_step_error[0][1] == pytest.approx(-0.1591616e-11)
        assert listing.volume_error == []

    def test_tomawac(self):
        listing = read_listing(DATA / "listing_tom_shoal.log")
        assert (listing.iteration, listing.time) == (12000, 1200.0)  # "TEMPS : ... SECONDES  12000IEME ITERATION"

    def test_coupled_telemac2d_gaia_tomawac(self):
        listing = read_listing(DATA / "listing_littoral.log")
        assert listing.time == 1000.0
        assert sorted(listing.fluxes) == [1, 2, 3]
        assert all(len(points) == 5 for points in listing.fluxes.values())
        assert listing.fluxes[2][0][1] == pytest.approx(-43.82774)
        assert listing.fluxes[3][0][1] == pytest.approx(51.46311)

    @pytest.mark.parametrize("name", ["listing_fail_compile.log", "listing_fail_plante.log"])
    def test_failed_runs(self, adapter, tmp_path, name):
        write(tmp_path / "csauto.stdout", (DATA / name).read_text(encoding="utf-8"))
        assert adapter.detect_outcome(tmp_path) == STATUS_FAILED

    def test_time_formats(self, tmp_path):
        lines = [
            " ITERATION        0    TIME:   0.0000 S",
            " ITERATION    36000    TIME: 10 H  0 MIN   0.0000 S   (    36000.0000 S)",
            "ITERATION       10 TIME    0 D  0 H  0 MN   0.4000 S   (          0.4000 S)",
            "  TEMPS :          300.0000 SECONDES                         3000IEME  ITERATION",
        ]
        listing = write(tmp_path / "csauto.stdout", "")
        expected = [(0, 0.0), (36000, 36000.0), (10, 0.4), (3000, 300.0)]
        for line, (iteration, time) in zip(lines, expected, strict=True):
            with listing.open("a", encoding="utf-8") as handle:
                handle.write(line + "\n")
            summary = read_listing(listing)
            assert (summary.iteration, summary.time) == (iteration, time)

    def test_solver_stages_and_maximum_iterations(self, tmp_path):
        listing = write(
            tmp_path / "csauto.stdout",
            " ITERATION        1    TIME:   1.0000 S\n"
            "--------------------------------------------------------------------------------\n"
            "                    DIFFUSION-PROPAGATION STEP\n"
            " GMRES (BIEF) : EXCEEDING MAXIMUM ITERATIONS:     100 RELATIVE PRECISION:   0.1E-02\n"
            " GMRES (BIEF) :       12 ITERATIONS, RELATIVE PRECISION:   0.1E-05\n"
            " CVTRVF_NERD (SCHEME NERD, 13 OR 14):   1 ITERATIONS\n"
            "     BEDLOAD FLUX BOUNDARY    1                =   0.1000000E-01\n"
            "     FLUX BOUNDARY    1:    -12.5     M3/S\n"
            "     RELATIVE ERROR IN VOLUME AT T =        1.000     S :    0.1D-14\n",
        )
        summary = read_listing(listing)
        assert summary.solvers == {
            "diffusion-propagation: GMRES (BIEF)": [(1.0, 100.0)],
            "diffusion-propagation: GMRES (BIEF) #2": [(1.0, 12.0)],
        }
        assert summary.fluxes == {1: [(1.0, -12.5)]}  # the sediment flux is not a boundary flux
        assert summary.volume_error == [(1.0, 1e-15)]  # Fortran D exponent

    def test_elapsed_time_across_other_ranks_lines(self, tmp_path):
        listing = write(
            tmp_path / "csauto.stdout",
            " ELAPSE TIME :\nSTOP 0\n           1  HOURS\n           2  MINUTES\n          12  SECONDS\n",
        )
        assert read_listing(listing).elapsed_seconds == 3600 + 120 + 12

    def test_listing_is_read_incrementally(self, tmp_path):
        listing = write(tmp_path / "csauto.stdout", " ITERATION       10    TIME:   1.0000 S\n ITERA")
        assert read_listing(listing).iteration == 10
        with listing.open("a", encoding="utf-8") as handle:
            handle.write("TION       20    TIME:   2.0000 S\n")
        summary = read_listing(listing)
        assert (summary.iteration, summary.time) == (20, 2.0)

    def test_rewritten_listing_is_read_again(self, tmp_path):
        listing = write(tmp_path / "csauto.stdout", " ITERATION       90    TIME:   9.0000 S\n")
        assert read_listing(listing).iteration == 90
        # A relaunch truncates the file in place and has already written more than before.
        write(listing, " ITERATION        5    TIME:   0.5000 S\n" + "x" * 100 + "\n")
        assert read_listing(listing).iteration == 5


class TestBalances:
    def test_control_sections_volume_and_courant(self):
        listing = read_listing(DATA / "listing_t2d_flotteurs_sections_p2.log")  # CONTROL SECTIONS, 2 processes
        assert list(listing.sections) == ["section 1", "section 2"]
        assert all(len(points) == 10 for points in listing.sections.values())
        assert listing.sections["section 1"][0] == (11520.0, 371.8383)
        assert listing.volume[0] == (11520.0, 4438021.0)
        assert listing.courant[0] == (10800.0, 0.9524178)  # the largest of the values printed for a step

    def test_tracers(self):
        listing = read_listing(DATA / "listing_t2d_node_by_node_tracers.log")
        assert sorted(listing.tracer_quantities) == sorted(listing.tracer_errors) == [1, 2]
        assert all(len(points) == 10 for points in listing.tracer_quantities.values())
        assert listing.tracer_quantities[2][1] == (10.0, 9.157633)
        assert listing.tracer_errors[1][1] == (10.0, -0.3879511e-15)

    def test_named_section_and_final_balance(self, tmp_path):
        listing = write(
            tmp_path / "csauto.stdout",
            " ITERATION        1    TIME:   1.0000 S\n"
            " CONTROL SECTION NUMBER  1 (NAME Weir_A)\n\n     DISCHARGE:     12.5\n"
            "                    FINAL BALANCE OF TRACER 1 (UNIT: ?? * M3)\n"
            "     FINAL QUANTITY                    :     99.0\n"
            "     RELATIVE ERROR                    :    0.5\n",
        )
        summary = read_listing(listing)
        assert summary.sections == {"Weir_A": [(1.0, 12.5)]}
        assert summary.tracer_quantities == {} and summary.tracer_errors == {}  # cumulated, not a time series

    def test_probe_series(self, adapter, tmp_path):
        write(tmp_path / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
        write(tmp_path / "csauto.stdout", (DATA / "listing_t2d_flotteurs_sections_p2.log").read_text(encoding="utf-8"))
        assert adapter.list_probe_files(tmp_path) == [
            "Boundary discharges.csv",
            "Control section discharges.csv",
            "Water volume.csv",
            "Courant number.csv",
            "Water volume error.csv",  # checks after the physical quantities
            "Solver iterations (diagnostics).csv",
        ]
        [path] = adapter.locate_probe_files(tmp_path, "Control section discharges.csv")
        assert adapter.read_probe_file(path)[0] == ["time", "section_1_(m3/s)", "section_2_(m3/s)"]


class TestMonitoring:
    def test_probes_from_the_listing(self, adapter, tmp_path):
        write(tmp_path / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
        write(tmp_path / "csauto.stdout", (DATA / "listing_littoral.log").read_text(encoding="utf-8"))
        assert adapter.list_probe_files(tmp_path) == [
            "Boundary discharges.csv",
            "Water volume.csv",
            "Water volume error.csv",
            "Solver iterations (diagnostics).csv",
        ]
        [path] = adapter.locate_probe_files(tmp_path, "Boundary discharges.csv")
        assert path == tmp_path / ".csauto.monitor" / "Boundary discharges.csv"
        columns, rows = adapter.read_probe_file(path)
        assert columns == ["time", "boundary_1_(m3/s)", "boundary_2_(m3/s)", "boundary_3_(m3/s)"]
        assert len(rows) == 5 and float(rows[0]["boundary_2_(m3/s)"]) == pytest.approx(-43.82774)
        modified = path.stat().st_mtime_ns
        adapter.locate_probe_files(tmp_path, "Boundary discharges.csv")
        assert path.stat().st_mtime_ns == modified  # unchanged data is not written again

    def test_unknown_probe(self, adapter, tmp_path):
        write(tmp_path / "csauto.stdout", LISTING)
        assert adapter.locate_probe_files(tmp_path, "../../etc/passwd") == []

    def test_progress_and_timing(self, adapter, tmp_path):
        write(tmp_path / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
        listing = write(tmp_path / "csauto.stdout", LISTING)
        assert adapter.read_progress(tmp_path) == 100
        assert adapter.parse_performance(listing) == {
            "module": "telemac2d",
            "elapsed_time": str(3600 + 120 + 12),
            "time_steps": "100",
            "simulated_time": "100.0",
        }

    def test_probe_names_from_the_coordinates_file(self, tmp_path):
        coordinates = write(
            tmp_path / "probes.txt",
            "1 4\n0 1000 50\n500 25 1 inlet / comment\n500 50 2 river mouth\n500,75,3,'west bank'\n500 90 4\n\n"
            "Description: comments\n",
        )
        # As TELEMAC reads them: one word, or a quoted name.
        assert probe_names(coordinates) == ["inlet", "river", "west bank", "point 4"]


class TestOutcome:
    def test_done(self, adapter, tmp_path):
        write(tmp_path / "csauto.stdout", LISTING)
        assert adapter.detect_outcome(tmp_path) == STATUS_DONE

    def test_python_launcher_failure(self, adapter, tmp_path):
        write(tmp_path / "csauto.stdout", "... processing the steering file\n")
        write(
            tmp_path / "csauto.stderr",
            "utils.exceptions.TelemacException: Unknown keyword FOO in steering file t2d.cas\n",
        )
        assert adapter.detect_outcome(tmp_path) == STATUS_FAILED

    def test_fortran_stop(self, adapter, tmp_path):
        write(tmp_path / "csauto.stdout", " PLANTE: PROGRAM STOPPED AFTER AN ERROR\n RETURNING EXIT CODE: 2\n")
        assert adapter.detect_outcome(tmp_path) == STATUS_FAILED

    def test_running(self, adapter, tmp_path):
        write(tmp_path / "csauto.stdout", " ITERATION       50    TIME:   5.0000 S\n")
        assert adapter.detect_outcome(tmp_path) is None


def test_mass_balance_lines_are_not_errors(adapter, tmp_path):
    from csauto.logs import collect_recent_errors

    case_dir = tmp_path / "RUNS" / "case0001"
    write(case_dir / "doe_row.csv", "case_id\ncase0001\n")
    write(
        case_dir / "csauto.stdout",
        "     RELATIVE ERROR IN VOLUME AT T = 5.0 S : 0.1E-14\n     RELATIVE ERROR  : 0.3E-15\n"
        " CHECK: NO ERROR HAS BEEN DETECTED\n"
        "     ERROR ON THE QUANTITY DURING THIS TIME STEP   :    0.1269655E-08\n"
        "     ERROR ON THE VOLUME DURING THIS TIME STEP     :    0.7137055E-10\n"
        "---- error analysis -----\n"
        " READ_MESH_INFO: TITLE= MESH WITH AN ERROR\n",
    )
    write(
        case_dir / "csauto.stderr",
        "Note: The following floating-point exceptions are signalling: IEEE_UNDERFLOW_FLAG\n",
    )
    assert collect_recent_errors(tmp_path / "RUNS", ["case0001"], adapter=adapter) == []


def test_real_errors_are_still_reported(adapter, tmp_path):
    from csauto.logs import collect_recent_errors

    case_dir = tmp_path / "RUNS" / "case0001"
    write(case_dir / "doe_row.csv", "case_id\ncase0001\n")
    write(
        case_dir / "csauto.stdout",
        " USER_CONDIN_H: TEST ERROR, NEGATIVE INITIAL DEPTH\n PLANTE: PROGRAM STOPPED AFTER AN ERROR\n",
    )
    assert collect_recent_errors(tmp_path / "RUNS", ["case0001"], adapter=adapter)


def test_doctor_reports_the_module(adapter, tmp_path):
    good = tmp_path / "case0001"
    write(good / "t2d_x.cas", "VELOCITY DIFFUSIVITY = 1.\n")
    unknown = tmp_path / "case0002"
    write(unknown / "study.cas", "TITLE = 'X'\n")
    items = adapter.doctor_checks(tmp_path, [good, unknown])
    messages = {item.message: item.level for item in items}
    assert messages["TELEMAC module: telemac2d (keywords) x1"] == "ok"
    assert any(level == "warn" and message.startswith("case0002:") for message, level in messages.items())


@pytest.mark.parametrize("spelling", ["openTELEMAC", "opentelemac", " OpenTelemac "])
def test_solver_name_in_any_case(tmp_path, spelling):
    from csauto.config import load_config

    (tmp_path / "csauto.toml").write_text(f'solver = "{spelling}"\n', encoding="utf-8")
    assert load_config(tmp_path / "csauto.toml").solver == "openTELEMAC"
    assert get_solver_adapter(spelling).name == "openTELEMAC"


def test_logos_are_svg(adapter):
    for logo in (adapter.logo_file, adapter.logo_dark_file, adapter.icon_file):
        assert logo is not None and logo.read_text(encoding="utf-8").lstrip().startswith("<?xml")


class TestModuleChoice:
    @pytest.mark.parametrize(
        ("name", "text", "level", "expected"),
        [
            (
                "study.cas",
                "VELOCITY DIFFUSIVITY = 1.\n",
                "info",
                "telemac2d (detected automatically from its keywords)",
            ),
            ("t3d_x.cas", "TITLE = 'X'\n", "info", "telemac3d (detected automatically from its file name)"),
            ("study.cas", "TITLE = 'X'\n", "error", "not detected in study.cas: choose it in the TELEMAC module menu"),
            ("study.cas", "CLASSES TYPE OF SEDIMENT = NCO\n", "error", "GAIA steering file"),
        ],
    )
    def test_setup_notes(self, adapter, tmp_path, name, text, level, expected):
        [note] = adapter.setup_notes(write(tmp_path / name, text))
        assert note.level == level and expected in note.text

    def test_other_files_have_no_notes(self, adapter, tmp_path):
        assert adapter.setup_notes(write(tmp_path / "geo.cli", "x")) == []

    def test_chosen_module_is_kept_by_csauto(self, adapter, tmp_path):
        # The campaign's choice (RUNS/campaign.json) wins over detection; the steering file is not touched.
        case_dir = tmp_path / "RUNS" / "case0001"
        cas = write(case_dir / "study.cas", "TITLE = 'NOTHING TELLS'\n")
        assert adapter.setup_notes(cas)[0].level == "error"
        write_campaign_settings(tmp_path / "RUNS", {"module": "telemac3d"})
        assert adapter.run_argv(case_dir, 2, 1)[0] == "telemac3d"
        assert [(note.level, note.text) for note in adapter.setup_notes(cas)] == [
            ("info", "TELEMAC module: telemac3d (chosen).")
        ]
        assert cas.read_text(encoding="utf-8") == "TITLE = 'NOTHING TELLS'\n"

    def test_option_values_are_checked(self, adapter):
        assert adapter.check_case_options({"module": ""}) == {"module": ""}  # back to automatic
        with pytest.raises(ValueError, match="is not one of"):
            adapter.check_case_options({"module": "gaia"})
        with pytest.raises(ValueError, match="no 'mesh' option"):
            adapter.check_case_options({"mesh": "x"})


class TestCoupling:
    def notes(self, adapter, folder, main_text, *others):
        for name in others:
            write(folder / name, "NOMBRE DE FREQUENCES = 25\n")
        main = write(folder / "t2d.cas", "VELOCITY DIFFUSIVITY = 1.\n" + main_text)
        return [(note.level, note.text) for note in adapter.setup_notes(main)][1:]  # after the module note

    def test_coupled_modules_are_listed(self, adapter, tmp_path):
        text = "COUPLING WITH = 'GAIA,TOMAWACT3D'\nGAIA STEERING FILE = gai.cas\nTOMAWAC STEERING FILE = 'tom.cas'\n"
        assert self.notes(adapter, tmp_path, text, "gai.cas", "tom.cas") == [
            ("info", "Coupled with GAIA (gai.cas), TOMAWAC (tom.cas).")
        ]

    def test_french_keywords_and_delwaq(self, adapter, tmp_path):
        text = "COUPLAGE AVEC = 'WAQTEL;DELWAQ'\nFICHIER DES PARAMETRES DE WAQTEL = 'waq.cas'\n"
        assert self.notes(adapter, tmp_path, text, "waq.cas") == [("info", "Coupled with WAQTEL (waq.cas), DELWAQ.")]

    def test_missing_steering_keyword(self, adapter, tmp_path):
        [(level, text)] = self.notes(adapter, tmp_path, "COUPLING WITH = 'GAIA'\n")
        assert level == "error" and "sets no GAIA STEERING FILE: TELEMAC will stop" in text

    def test_missing_steering_file(self, adapter, tmp_path):
        [(level, text)] = self.notes(adapter, tmp_path, "COUPLING WITH = 'KHIONE'\nKHIONE STEERING FILE = 'ice.cas'\n")
        assert level == "error" and "ice.cas as KHIONE STEERING FILE, which is not in the case" in text

    def test_steering_file_without_coupling(self, adapter, tmp_path):
        [(level, text)] = self.notes(adapter, tmp_path, "GAIA STEERING FILE = 'gai.cas'\n", "gai.cas")
        assert level == "warn" and "COUPLING WITH does not name GAIA: TELEMAC will not run it" in text

    def test_uncoupled(self, adapter, tmp_path):
        assert self.notes(adapter, tmp_path, "") == []


class TestProgress:
    def test_simulated_time_against_the_target(self, adapter, tmp_path):
        write(tmp_path / "t3d.cas", "NUMBER OF HORIZONTAL LEVELS = 6\nTIME STEP = 120.\nNUMBER OF TIME STEPS = 21600\n")
        write(
            tmp_path / "csauto.stdout",
            "ITERATION     0 TIME    0 D  0 H  0 MN   0.0000 S   (          0.0000 S)\n"
            "ITERATION  9360 TIME   13 D  0 H  0 MN   0.0000 S   (    1123200.0000 S)\n",
        )
        progress = adapter.read_simulation_progress(tmp_path)
        assert progress.label == "13 / 30 d (43 %)"
        assert progress.fraction == pytest.approx(1123200 / 2592000)

    def test_duration_and_continued_computation(self, adapter, tmp_path):
        write(
            tmp_path / "t2d.cas",
            "VELOCITY DIFFUSIVITY = 1.\nTIME STEP = 1.\nNUMBER OF TIME STEPS = 10\nDURATION = 7200.\n",
        )
        # A continued computation starts at 3600 s: the progress counts from there.
        write(
            tmp_path / "csauto.stdout",
            " ITERATION        0    TIME:  1 H  0 MIN   0.0000 S   (     3600.0000 S)\n"
            " ITERATION     1800    TIME:  1 H 30 MIN   0.0000 S   (     5400.0000 S)\n",
        )
        assert adapter.read_simulation_progress(tmp_path).label == "0.5 / 2 h (25 %)"

    def test_nothing_without_a_listing_or_a_target(self, adapter, tmp_path):
        write(tmp_path / "art.cas", "WAVE PERIOD = 8.\n")
        assert adapter.read_simulation_progress(tmp_path) is None
        write(tmp_path / "csauto.stdout", " ITERATION        1    TIME:   1.0000 S\n")
        write(tmp_path / "art.cas", "WAVE PERIOD = 8.\nTIME STEP = 0.\n")
        assert adapter.read_simulation_progress(tmp_path) is None

    def test_status_rows_and_cli(self, tmp_path, capsys):
        from csauto.cli import print_status_table

        print_status_table(
            [{"case_id": "case0001", "status": "RUNNING", "last_iter": 9360, "progress": "13 / 30 d (43 %)"}]
        )
        header = capsys.readouterr().out.splitlines()[0]
        assert header.split(" | ")[4:6] == ["last_iter", "progress        "]


def test_series_names_survive_the_probes_panel():
    """The Probes panel splits the names it asks for at commas and spaces: TELEMAC's never hold any."""
    from csauto.solvers.telemac.listing import column_name

    assert column_name("volume in the domain (m3)") == "volume_in_the_domain_(m3)"
    assert column_name("advection: GRACJG (BIEF)") == "advection_GRACJG_(BIEF)"
    assert column_name(" west bank ") == "west_bank"


class TestRestart:
    """A restart runs a copy of the main steering file continued from its last results; the .cas is never changed."""

    CAS = (
        "VELOCITY DIFFUSIVITY = 1.\n"
        "RESULTS FILE = 'RESU/r2d.slf'\n"
        "TIME STEP = 2.\n"
        "NUMBER OF TIME STEPS = 100\n"
        "/ DURATION = 50.\n"
    )

    @pytest.fixture()
    def case_dir(self, tmp_path):
        case_dir = tmp_path / "RUNS" / "case0001"
        write(case_dir / "t2d.cas", self.CAS)
        write(case_dir / "RESU" / "r2d.slf", "results")
        return case_dir

    def test_additional_simulated_time(self, adapter, case_dir):
        args, details = adapter.build_restart_args(case_dir, "simulated_time", 600.0, None)
        assert args == [".csauto.restart.cas"]
        assert details == {"restart": True, "restart_from": "RESU/r2d.slf", "restart_simulated_time": 600.0}
        text = (case_dir / ".csauto.restart.cas").read_text(encoding="utf-8")
        assert "NUMBER OF TIME STEPS = 100" not in text  # replaced: TELEMAC runs max(steps, duration / step)
        assert text.endswith(
            "PREVIOUS COMPUTATION FILE = 'RESU/r2d.slf'\nRECORD NUMBER FOR RESTART = -1\n"
            "INITIAL TIME SET TO ZERO = NO\nDURATION = 600.0\nNUMBER OF TIME STEPS = 0\n"
        )
        assert (case_dir / "t2d.cas").read_text(encoding="utf-8") == self.CAS
        assert adapter.run_argv(case_dir, 4, 1, args) == ["telemac2d", "--ncsize", "4", "--mpi", ".csauto.restart.cas"]
        assert adapter.find_setup_file(case_dir).name == "t2d.cas"  # the copy is never the main steering file

    def test_additional_time_steps(self, adapter, case_dir):
        adapter.build_restart_args(case_dir, "time_steps", 30, "RESU")
        text = (case_dir / ".csauto.restart.cas").read_text(encoding="utf-8")
        assert text.endswith("NUMBER OF TIME STEPS = 30\nDURATION = 0.\n")

    def test_without_a_mode_the_run_length_is_kept(self, adapter, case_dir):
        adapter.build_restart_args(case_dir, None, None, None)
        text = (case_dir / ".csauto.restart.cas").read_text(encoding="utf-8")
        assert "NUMBER OF TIME STEPS = 100" in text and "DURATION =" not in text.split("/ Written by csauto")[1]

    def test_the_restart_file_wins_over_the_results(self, adapter, case_dir):
        write(case_dir / "t2d.cas", self.CAS + "RESTART FILE = 'RESU/restart.slf'\nRESTART FILE FORMAT = 'SERAFIND'\n")
        write(case_dir / "RESU" / "restart.slf", "restart")
        _args, details = adapter.build_restart_args(case_dir, None, None, None)
        assert details["restart_from"] == "RESU/restart.slf"
        text = (case_dir / ".csauto.restart.cas").read_text(encoding="utf-8")
        assert "PREVIOUS COMPUTATION FILE FORMAT = 'SERAFIND'" in text

    @pytest.mark.parametrize(
        ("cas", "results", "message"),
        [
            (CAS, False, "no results to restart from"),
            (CAS + "COUPLING WITH = 'GAIA'\n", True, "coupled"),
            ("NUMBER OF FREQUENCIES = 25\nRESULTS FILE = 'RESU/r2d.slf'\n", True, "not TOMAWAC"),
        ],
    )
    def test_cases_it_cannot_restart(self, adapter, tmp_path, cas, results, message):
        case_dir = tmp_path / "case0001"
        write(case_dir / "t2d.cas", cas)
        if results:
            write(case_dir / "RESU" / "r2d.slf", "results")
        with pytest.raises(ValueError, match=message):
            adapter.build_restart_args(case_dir, None, None, None)

    def test_progress_and_origin_of_a_restart(self, adapter, case_dir):
        from csauto.registry import append_history

        write(
            case_dir / "csauto.stdout", " ITERATION        0    TIME:  200.0000 S\n ITERATION  150 TIME:  500.0000 S\n"
        )
        append_history(case_dir, "run", details={"restart": True})
        adapter.build_restart_args(case_dir, "simulated_time", 600.0, None)
        assert adapter.read_simulation_progress(case_dir).label == "5 / 10 min (50 %)"  # the restart's own length
        assert adapter.read_restart_origin(case_dir) == {"time": 200.0}
        append_history(case_dir, "run", details={})  # a normal run again: the main steering file's length
        assert adapter.read_restart_origin(case_dir) == {}  # starting later than 0 is not a restart
        assert adapter.read_simulation_progress(case_dir).label == "3.33 / 3.33 min (100 %)"
