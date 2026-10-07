from __future__ import annotations

import pytest

from csauto.template import extract_placeholders, render_template


def test_render_template_replaces_placeholders() -> None:
    text = "<root>{foo}-{bar}</root>"
    row = {"foo": "A", "bar": "B"}
    rendered = render_template(text, row, "case0001")
    assert rendered == "<root>A-B</root>"


def test_render_template_missing_value_raises() -> None:
    text = "<root>{foo}-{bar}</root>"
    row = {"foo": "A"}
    with pytest.raises(ValueError) as excinfo:
        render_template(text, row, "case0002")
    assert str(excinfo.value) == "Missing placeholder values for case0002: bar"


def test_render_template_unresolved_placeholder_raises() -> None:
    text = "<root>{foo}-{baz}</root>"
    row = {"foo": "A"}
    with pytest.raises(ValueError) as excinfo:
        render_template(text, row, "case0003")
    assert "case0003" in str(excinfo.value)


def test_extract_placeholders_ignores_shell_expansions() -> None:
    text = "echo ${HOME}\n<root>{foo}</root>\n"
    assert extract_placeholders(text) == {"foo"}


def test_render_template_preserves_shell_expansions() -> None:
    text = "echo ${HOME}\n<root>{foo}</root>\n"
    row = {"foo": "A", "HOME": "/tmp/home"}
    rendered = render_template(text, row, "case0004")
    assert "echo ${HOME}" in rendered
    assert "<root>A</root>" in rendered


def test_escaped_placeholder_is_kept_literally() -> None:
    text = "print(f'step \\{i}')\nv = {velocity}\n"
    assert extract_placeholders(text) == {"velocity"}
    assert render_template(text, {"velocity": "2"}, "case0001") == "print(f'step {i}')\nv = 2\n"


def test_format_specs_and_shell_variables_are_not_placeholders() -> None:
    assert extract_placeholders("f'{x:.3e}' ${HOME} {'a': 1}") == set()
