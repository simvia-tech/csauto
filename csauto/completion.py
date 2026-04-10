"""Shell completion script generators for csauto."""

from __future__ import annotations

import argparse


def _subparsers_actions(parser: argparse.ArgumentParser) -> dict[str, argparse.ArgumentParser]:
    """Extract subcommand name -> sub-parser mapping."""
    result: dict[str, argparse.ArgumentParser] = {}
    for action in parser._subparsers._actions:
        if isinstance(action, argparse._SubParsersAction):
            for name, sub in action.choices.items():
                result[name] = sub
    return result


def _option_strings(parser: argparse.ArgumentParser) -> list[str]:
    """Return all --option flags for a parser (skip positionals and -h)."""
    opts: list[str] = []
    for action in parser._actions:
        if isinstance(action, (argparse._HelpAction, argparse._VersionAction)):
            continue
        for o in action.option_strings:
            if o.startswith("--"):
                opts.append(o)
    return sorted(opts)


def _choices_for(parser: argparse.ArgumentParser, option: str) -> list[str]:
    """Return choices list for a given option, if any."""
    for action in parser._actions:
        if option in action.option_strings and action.choices:
            return list(action.choices)
    return []


def generate_bash(parser: argparse.ArgumentParser) -> str:
    subs = _subparsers_actions(parser)
    commands = " ".join(sorted(subs))
    global_opts = " ".join(_option_strings(parser))

    case_blocks: list[str] = []
    for name, sub in sorted(subs.items()):
        opts = _option_strings(sub)
        # Build per-option choices
        choice_cases: list[str] = []
        for opt in opts:
            choices = _choices_for(sub, opt)
            if choices:
                choice_cases.append(
                    f"                {opt})\n"
                    f'                    COMPREPLY=( $(compgen -W "{" ".join(choices)}" -- "$cur") )\n'
                    f"                    return ;;"
                )
        prev_block = ""
        if choice_cases:
            prev_block = '            case "$prev" in\n' + "\n".join(choice_cases) + "\n" + "            esac\n"
        opts_str = " ".join(opts)
        case_blocks.append(
            f"        {name})\n"
            f"{prev_block}"
            f'            COMPREPLY=( $(compgen -W "{opts_str}" -- "$cur") )\n'
            f"            return ;;"
        )

    cases = "\n".join(case_blocks)

    return f"""\
_csauto() {{
    local cur prev words cword
    _init_completion || return

    if [ "$cword" -eq 1 ]; then
        COMPREPLY=( $(compgen -W "{commands} {global_opts}" -- "$cur") )
        return
    fi

    local subcmd="${{words[1]}}"
    case "$subcmd" in
{cases}
    esac
}}

complete -F _csauto -o default csauto
"""


def generate_zsh(parser: argparse.ArgumentParser) -> str:
    subs = _subparsers_actions(parser)

    cmd_lines: list[str] = []
    for name, sub in sorted(subs.items()):
        desc = sub.description or (sub._subparsers and "") or ""
        if not desc:
            for action in parser._subparsers._actions:
                if isinstance(action, argparse._SubParsersAction):
                    p = action.choices.get(name)
                    if p and hasattr(p, "_help"):
                        desc = p._help or ""
                    elif p:
                        for a in parser._actions:
                            if hasattr(a, "_parser_class"):
                                break
        help_text = ""
        for action in parser._subparsers._actions:
            if isinstance(action, argparse._SubParsersAction):
                sp = action.choices.get(name)
                if sp:
                    help_text = getattr(sp, "description", "") or ""
                    if not help_text:
                        for k, v in action._name_parser_map.items():
                            if k == name:
                                help_text = (
                                    v.format_usage().split(":")[-1].strip() if hasattr(v, "format_usage") else ""
                                )
        # Simpler: get help from the subparser help kwarg
        for action in parser._subparsers._actions:
            if isinstance(action, argparse._SubParsersAction):
                for choice_action in action._choices_actions:
                    if choice_action.dest == name:
                        help_text = choice_action.help or ""
        cmd_lines.append(f"        '{name}:{_zsh_escape(help_text)}'")

    cmd_block = "\n".join(cmd_lines)

    case_blocks: list[str] = []
    for name, sub in sorted(subs.items()):
        args_lines: list[str] = []
        for action in sub._actions:
            if isinstance(action, (argparse._HelpAction, argparse._VersionAction)):
                continue
            if action.option_strings:
                for opt in action.option_strings:
                    if opt.startswith("--"):
                        h = _zsh_escape(action.help or "")
                        if action.choices:
                            choices = " ".join(str(c) for c in action.choices)
                            args_lines.append(f"                '{opt}[{h}]:value:({choices})'")
                        elif action.type in (None,) and isinstance(action, argparse._StoreTrueAction):
                            args_lines.append(f"                '{opt}[{h}]'")
                        else:
                            args_lines.append(f"                '{opt}[{h}]:value:_files'")
        if args_lines:
            args_block = " \\\n".join(args_lines)
            case_blocks.append(
                f"            {name})\n                _arguments -s \\\n{args_block}\n                ;;"
            )
        else:
            case_blocks.append(f"            {name})\n                _files\n                ;;")

    cases = "\n".join(case_blocks)

    return f"""\
#compdef csauto

_csauto() {{
    local -a commands
    commands=(
{cmd_block}
    )

    _arguments -s \\
        '--version[Show version]' \\
        '--config[Path to csauto.toml]:file:_files' \\
        '1:command:->command' \\
        '*::arg:->args'

    case $state in
        command)
            _describe 'csauto command' commands
            ;;
        args)
            case $words[1] in
{cases}
            esac
            ;;
    esac
}}

compdef _csauto csauto
"""


def _zsh_escape(s: str) -> str:
    return s.replace("'", "'\\''").replace("[", "\\[").replace("]", "\\]")
