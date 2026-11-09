# Example: telemac2d-node-by-node

A small TELEMAC-2D campaign showing how csauto runs openTELEMAC.

## What this example does

Simulates 50 s of flow in a channel whose liquid boundaries are imposed node by
node from a file (the `node_by_node_bdy` case of the openTELEMAC examples). The
DOE varies the **friction coefficient** (Nikuradse law, roughness height in m): 0.05, 0.1 and 0.2,
which gives **3 cases**.

## Files

```
telemac2d-node-by-node/
├── csauto.toml                          ← solver and runtime configuration (Docker)
├── doe.csv                              ← 3 cases
├── TEMPLATE/
│   ├── t2d_node_by_node_bdy.cas         ← the steering file, with {friction}
│   ├── probes.txt                       ← TELEMAC's time series points (x, y, number, name)
│   └── liq_node_by_node_bdy.txt         ← liquid boundary values
└── MESH/
    ├── geo_node_by_node_bdy.slf         ← geometry
    └── geo_node_by_node_bdy.cli         ← boundary conditions
```

`MESH` is shared by every case: `csauto prepare` places it next to the cases
(`RUNS/MESH`), and the steering file names its files as
`'../MESH/geo_node_by_node_bdy.slf'`. Keep such paths in quotes: in a `.cas`
file, `/` starts a comment.

Results are written under `RESU/` (`RESULTS FILE = 'RESU/r2d_node_by_node_bdy.slf'`),
the folder csauto treats as the case's run: its size shows in the status table,
and Clean deletes it. When a case runs again, TELEMAC keeps the previous result
next to the new one as `r2d_node_by_node_bdy_old1.slf`.

## How csauto runs it

csauto reads the module from the steering file (here `telemac2d`, from keywords
only TELEMAC-2D has) and starts, inside each case folder:

```
runcode.py telemac2d --ncsize <n> --mpi t2d_node_by_node_bdy.cas
```

`csauto doctor RUNS` shows the module it found for each case. To set it
yourself, use the **TELEMAC module** menu above the dashboard's panels.

## Prerequisites

- csauto installed (`csauto --version` works)
- Docker, with the openTELEMAC image: `docker pull simvia/opentelemac:v9.1.0`

## Run it

```bash
cd examples/telemac2d-node-by-node
csauto prepare doe.csv TEMPLATE RUNS
csauto doctor RUNS
csauto serve RUNS        # then Run from the Status panel
```

Or from the terminal: `csauto run RUNS --n 1 --nt 1 --max-parallel 3`, then
`csauto status RUNS`. Each case takes about 10 s.

In the dashboard, the status table's **Progress** column shows the simulated
time reached out of 50 s, and **Probes** plots against the simulated time:

- the velocity, the free surface and both tracers at three probes, `inlet`,
  `middle` and `outlet`: TELEMAC's own time series, declared in the steering
  file (`TIME SERIES COORDINATES FILE 1 = 'probes.txt'`, the points' x, y, numbers and
  names, and `TIME SERIES FILE 1`, where TELEMAC writes their values);
- then, from the listing, the boundary discharges, the water volume and the
  tracer quantities, the balance errors and the solver iterations.

**Timing Snapshot** shows the elapsed time, the last time step and the
simulated time, and **Log Tail** follows the TELEMAC listing (`csauto.stdout`).

The input files come from the openTELEMAC examples (GPL-3.0).
