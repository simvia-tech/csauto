# Open a WSL window

csauto does not run on Windows directly: it runs inside WSL, the Linux that ships with Windows, like code_aster and code_saturne.

1. Install WSL from a PowerShell window, then restart:

   ```powershell
   wsl --install
   ```

2. Install the [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) for VS Code.
3. Click **Connect to WSL**, or run **WSL: Connect to WSL** from the Command Palette, then open your project folder there.
4. Install csauto in the WSL window when VS Code offers it, and follow the next steps of this guide there.

For Docker, install [Docker Desktop](https://docs.docker.com/desktop/features/wsl/) and turn on its WSL integration.
