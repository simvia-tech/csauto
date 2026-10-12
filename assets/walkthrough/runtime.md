# Set up csauto

The extension creates a private Python environment and installs the csauto engine that ships with it, so both always have the same version.

- It lives in the extension's storage and is set up once per machine (each WSL distribution or remote host gets its own).
- The dependencies ship with the extension, so no download is needed. On an unusual platform or a Python newer than the extension, they are downloaded from PyPI instead.
- Updating the extension replaces the environment automatically.

If the setup fails, **csauto: Show Server Logs** shows what went wrong.
