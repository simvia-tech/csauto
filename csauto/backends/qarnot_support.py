"""Qarnot decisions that are not API calls.

Kept apart from `qarnot.py` so every rule here is unit-testable with no SDK
installed, no token and no network, and so the backend module stays short
enough to read in one sitting.
"""

from __future__ import annotations

import hashlib
import re
from collections.abc import Sequence
from dataclasses import dataclass
from pathlib import Path

# S3 bucket names: 3 to 63 characters, lowercase letters, digits, dots and
# hyphens, starting and ending with a letter or a digit.
_UNSAFE = re.compile(r"[^a-z0-9]+")
_SLUG_MAX = 20


def bucket_name(runs_dir: Path, suffix: str = "") -> str:
    """An S3-legal bucket name for a campaign, stable and collision free.

    The readable part comes from the campaign directory name, so a bucket is
    recognisable in the Qarnot console; the digest comes from its absolute
    path, so two campaigns that normalise to the same slug never collide.
    """
    resolved = Path(runs_dir).resolve()
    digest = hashlib.sha256(str(resolved).encode("utf-8")).hexdigest()[:8]
    slug = _UNSAFE.sub("-", resolved.name.lower()).strip("-")[:_SLUG_MAX].strip("-") or "runs"
    parts = ["csauto", slug, digest]
    if suffix:
        clean = _UNSAFE.sub("-", str(suffix).lower()).strip("-")
        if clean:
            parts.append(clean)
    return "-".join(parts)


def snapshot_whitelist(globs: Sequence[str]) -> str:
    """Translate adapter globs into the regex Qarnot's snapshot filter expects.

    Qarnot documents whitelist and blacklist as regular expressions, so the
    patterns cannot be passed through unchanged. `*` stops at a slash, `**`
    crosses one, and everything else is escaped.
    """
    parts = [_translate(str(pattern).strip()) for pattern in globs if str(pattern).strip()]
    return "|".join(parts)


def _translate(pattern: str) -> str:
    out: list[str] = []
    index = 0
    while index < len(pattern):
        char = pattern[index]
        if char == "*":
            if pattern[index + 1 : index + 2] == "*":
                out.append(".*")
                index += 2
            else:
                out.append("[^/]*")
                index += 1
            continue
        if char == "?":
            out.append("[^/]")
            index += 1
            continue
        out.append(re.escape(char))
        index += 1
    return "".join(out)


@dataclass(frozen=True)
class UploadPlan:
    """What a single case would upload: relative paths, and how many bytes."""

    paths: tuple[str, ...]
    total_bytes: int


def upload_plan(case_dir: Path, *, shared_dir_names: Sequence[str], results_dirname: str) -> UploadPlan:
    """The case's own input files: everything that is neither shared nor output.

    The shared directories are campaign-wide (and usually symlinks to a mesh of
    several gigabytes), so they travel once per campaign in their own bucket,
    not once per case. The results directory is what comes back, not what goes.
    """
    case_dir = Path(case_dir)
    skip = {str(name) for name in shared_dir_names} | {str(results_dirname)}
    paths: list[str] = []
    total = 0
    for path in sorted(case_dir.rglob("*")):
        if not path.is_file() or path.is_symlink():
            continue
        relative = path.relative_to(case_dir)
        if relative.parts[0] in skip or any(part.startswith(".") for part in relative.parts):
            continue
        paths.append(relative.as_posix())
        total += path.stat().st_size
    return UploadPlan(paths=tuple(paths), total_bytes=total)


def ensure_upload_within(plan: UploadPlan, max_mb: int) -> None:
    """Refuse a case whose inputs are too large to upload per case.

    A hundred-case campaign multiplies this by a hundred, so an accidental
    gigabyte in DATA/ is worth stopping before it is paid for.
    """
    limit = int(max_mb) * 1024 * 1024
    if plan.total_bytes <= limit:
        return
    raise ValueError(
        f"Case inputs are {plan.total_bytes / 1024 / 1024:.1f} MB, over the "
        f"{max_mb} MB limit ({len(plan.paths)} files). Move bulk data into a "
        f"shared directory, or raise qarnot_max_upload_mb."
    )


def directory_signature(paths: Sequence[Path]) -> str:
    """A cheap fingerprint of the shared directories: names, sizes, mtimes.

    Only stat calls, so fingerprinting a multi-gigabyte mesh costs nothing.
    Used to skip re-uploading the shared bucket when nothing changed.
    """
    digest = hashlib.sha256()
    for root in sorted(Path(p) for p in paths):
        for path in sorted(root.rglob("*")):
            if not path.is_file():
                continue
            stat = path.stat()
            digest.update(f"{path.relative_to(root).as_posix()}:{stat.st_size}:{stat.st_mtime_ns}\n".encode())
    return digest.hexdigest()


def split_image(image: str) -> tuple[str, str]:
    """Split `repo[:tag]` into the DOCKER_REPO and DOCKER_TAG constants."""
    text = str(image or "").strip()
    if not text:
        raise ValueError(
            "Qarnot runs docker images, but no docker image is configured. "
            "Set docker_image in csauto.toml even when the local runtime is native."
        )
    repo, separator, tag = text.rpartition(":")
    if not separator or "/" in tag:
        return text, "latest"
    return repo, tag or "latest"


__all__ = [
    "UploadPlan",
    "bucket_name",
    "directory_signature",
    "ensure_upload_within",
    "snapshot_whitelist",
    "split_image",
    "upload_plan",
]
