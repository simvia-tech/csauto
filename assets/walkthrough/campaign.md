# Create your first campaign

A campaign is a folder with:

- a **template case**: your solver files, with `{placeholders}` where values change from one case to the next;
- a **parameter table** (`doe.csv`): one row per case, one column per placeholder;
- `csauto.toml`: the solver and its version.

**New Campaign** walks you through it: pick a solver, start from its example (ready to run) or from your own files, fill the parameter table, then choose the version. csauto generates one case per row, and the dashboard runs them and follows their progress.
