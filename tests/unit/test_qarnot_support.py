"""Pure Qarnot logic: no SDK, no network, no account."""

from __future__ import annotations

import re
from pathlib import Path

import pytest

from csauto.backends.qarnot_support import (
    bucket_name,
    directory_signature,
    ensure_upload_within,
    snapshot_whitelist,
    split_image,
    upload_plan,
)


def test_bucket_name_is_s3_legal(tmp_path: Path) -> None:
    campaign = tmp_path / "My_Study 2026"
    campaign.mkdir()

    name = bucket_name(campaign)

    assert re.fullmatch(r"[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]", name), name
    assert "_" not in name
    assert 3 <= len(name) <= 63


def test_bucket_name_is_stable_and_collision_free(tmp_path: Path) -> None:
    """Two campaigns that normalise to the same slug must not share a bucket."""
    first = tmp_path / "a" / "My_Study"
    second = tmp_path / "b" / "My-Study"
    first.mkdir(parents=True)
    second.mkdir(parents=True)

    assert bucket_name(first) == bucket_name(first)
    assert bucket_name(first) != bucket_name(second)


def test_bucket_name_appends_a_suffix(tmp_path: Path) -> None:
    assert bucket_name(tmp_path, "shared").endswith("-shared")


def test_snapshot_whitelist_is_a_regex_not_a_glob() -> None:
    """Qarnot filters are regular expressions; the adapter declares globs."""
    pattern = snapshot_whitelist(("RESU/*/listing",))

    assert re.match(pattern, "RESU/20260914-1200/listing")
    assert not re.match(pattern, "RESU/a/b/listing"), "* must not cross a slash"


def test_snapshot_whitelist_escapes_regex_metacharacters() -> None:
    pattern = snapshot_whitelist(("RESU/*/run_status.*",))

    assert re.match(pattern, "RESU/r1/run_status.failed")
    assert not re.match(pattern, "RESU/r1/run_statusXfailed")


def test_snapshot_whitelist_joins_several_patterns() -> None:
    pattern = snapshot_whitelist(("a/*.csv", "b/*.log"))

    assert re.match(pattern, "a/x.csv")
    assert re.match(pattern, "b/y.log")
    assert not re.match(pattern, "c/z.txt")


def test_snapshot_whitelist_of_nothing_is_empty() -> None:
    assert snapshot_whitelist(()) == ""


def test_upload_plan_skips_shared_and_results_directories(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<x/>", encoding="utf-8")
    (case_dir / "MESH").mkdir()
    (case_dir / "MESH" / "huge.med").write_text("x" * 100, encoding="utf-8")
    (case_dir / "RESU").mkdir()
    (case_dir / "RESU" / "old.log").write_text("y", encoding="utf-8")
    (case_dir / ".csauto.history.jsonl").write_text("{}", encoding="utf-8")
    (case_dir / "doe_row.csv").write_text("a,b\n1,2\n", encoding="utf-8")

    plan = upload_plan(case_dir, shared_dir_names=("MESH", "POST"), results_dirname="RESU")

    assert set(plan.paths) == {"DATA/setup.xml", "doe_row.csv"}
    assert plan.total_bytes == len("<x/>") + len("a,b\n1,2\n")


def test_ensure_upload_within_refuses_an_oversized_case() -> None:
    from csauto.backends.qarnot_support import UploadPlan

    plan = UploadPlan(paths=("big.med",), total_bytes=3 * 1024 * 1024)

    with pytest.raises(ValueError, match=r"3\.0 MB"):
        ensure_upload_within(plan, max_mb=2)


def test_ensure_upload_within_accepts_a_small_case() -> None:
    from csauto.backends.qarnot_support import UploadPlan

    ensure_upload_within(UploadPlan(paths=("a",), total_bytes=10), max_mb=1)


def test_directory_signature_changes_when_a_file_changes(tmp_path: Path) -> None:
    shared = tmp_path / "MESH"
    shared.mkdir()
    mesh = shared / "m.med"
    mesh.write_text("one", encoding="utf-8")

    before = directory_signature([shared])
    mesh.write_text("one and more", encoding="utf-8")

    assert directory_signature([shared]) != before


def test_directory_signature_is_stable_when_nothing_changes(tmp_path: Path) -> None:
    shared = tmp_path / "MESH"
    shared.mkdir()
    (shared / "m.med").write_text("one", encoding="utf-8")

    assert directory_signature([shared]) == directory_signature([shared])


@pytest.mark.parametrize(
    ("image", "expected"),
    [
        ("simvia/code_saturne", ("simvia/code_saturne", "latest")),
        ("simvia/code_saturne:9.0", ("simvia/code_saturne", "9.0")),
        ("ubuntu", ("ubuntu", "latest")),
    ],
)
def test_split_image(image: str, expected: tuple[str, str]) -> None:
    assert split_image(image) == expected


def test_split_image_refuses_an_empty_image() -> None:
    with pytest.raises(ValueError, match="no docker image"):
        split_image("")


def test_minimum_core_constraint_shape() -> None:
    from csauto.backends.qarnot_support import minimum_core_constraint

    assert minimum_core_constraint(4).to_json() == {
        "discriminator": "MinimumCoreHardwareConstraint",
        "coreCount": 4,
    }


def test_minimum_core_constraint_matches_the_sdk() -> None:
    """Guards the hand-written discriminator against an SDK rename.

    The constraint is built without importing the SDK, so the unit tests stay
    runnable without the optional extra. This test is the price of that: when
    the SDK is installed, the two must agree.
    """
    sdk = pytest.importorskip("qarnot.hardware_constraint")

    from csauto.backends.qarnot_support import minimum_core_constraint

    assert minimum_core_constraint(7).to_json() == sdk.MinimumCoreHardware(7).to_json()


def test_scheduling_choices_are_the_three_qarnot_values() -> None:
    from csauto.backends.qarnot_support import SCHEDULING_CHOICES

    assert [value for value, _label in SCHEDULING_CHOICES] == ["Flex", "OnDemand", "Reserved"]


def test_scheduling_choice_carries_the_attribute_the_sdk_reads() -> None:
    """Task._to_json reads `.schedulingType` off whatever object is set."""
    from csauto.backends.qarnot_support import scheduling_choice

    assert scheduling_choice("OnDemand").schedulingType == "OnDemand"


def test_scheduling_choice_matches_the_sdk() -> None:
    sdk = pytest.importorskip("qarnot.scheduling_type")

    from csauto.backends.qarnot_support import SCHEDULING_CHOICES, scheduling_choice

    for value, _label in SCHEDULING_CHOICES:
        assert scheduling_choice(value).schedulingType == sdk.SchedulingType.from_string(value).schedulingType


def test_scheduling_choice_rejects_an_unknown_value() -> None:
    from csauto.backends.qarnot_support import scheduling_choice

    with pytest.raises(ValueError, match="Nope"):
        scheduling_choice("Nope")


def test_specific_hardware_constraint_shape() -> None:
    from csauto.backends.qarnot_support import specific_hardware_constraint

    assert specific_hardware_constraint("r640-a").to_json() == {
        "discriminator": "SpecificHardwareConstraint",
        "specificationKey": "r640-a",
    }


def test_specific_hardware_constraint_matches_the_sdk() -> None:
    sdk = pytest.importorskip("qarnot.hardware_constraint")

    from csauto.backends.qarnot_support import specific_hardware_constraint

    assert specific_hardware_constraint("r640-a").to_json() == sdk.SpecificHardware("r640-a").to_json()
