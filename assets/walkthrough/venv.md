# Python can create environments

csauto keeps its packages in a private environment inside the extension's storage, so it never touches your system Python. Creating one needs Python's `venv` module.

Debian and Ubuntu ship it as a separate package. Install the one matching your Python version, for example:

```sh
sudo apt install python3.12-venv
```

Then click **Check again**.

No administrator rights? Ask your administrator for it, or point the `csauto.pythonPath` setting to an interpreter (a conda environment, a module) that already has csauto installed.
