# Python 3.11 or newer

Check which Python you have in a terminal:

```sh
python3 --version
```

If it is missing or older than 3.11:

- **Ubuntu or Debian:** `sudo apt install python3` (Ubuntu 24.04 and Debian 13 ship 3.12 or newer).
- **Fedora or RHEL:** `sudo dnf install python3.12`.
- **macOS:** `brew install python@3.13`, or the installer from [python.org](https://www.python.org/downloads/).
- **A cluster:** look for a module, for example `module avail python`, then `module load python/3.12`.

On Windows, use csauto from [WSL](https://learn.microsoft.com/windows/wsl/install) or a remote Linux machine: open the folder there and Python is needed on that side.

Using a module or a conda environment? Point the `csauto.pythonPath` setting to an interpreter that has csauto installed (the wheel from the [releases page](https://github.com/simvia-tech/csauto/releases), with `pip install "csauto-<version>-py3-none-any.whl[web]"`), and csauto skips its own environment.
