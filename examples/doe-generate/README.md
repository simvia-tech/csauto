# Example: doe-generate

Demonstrates `csauto doe`: generating `doe.csv` from a parameter spec instead
of hand-writing it. This example only exercises DOE generation + `prepare`
(no code_saturne runtime required) — `TEMPLATE/DATA/setup.xml` is a stub with
just the two placeholders used by `spec.toml`.

## Files

```
doe-generate/
├── spec.toml                  ← parameter spec (1 continuous + 1 discrete param)
└── TEMPLATE/
    └── DATA/
        └── setup.xml           ← uses {u_inlet} and {turbulence_model}
```

`spec.toml`:

```toml
[parameters.u_inlet]
min = 0.5
max = 5.0

[parameters.turbulence_model]
levels = ["k-epsilon", "k-omega-sst"]
```

## 1. Generate doe.csv

```bash
cd examples/doe-generate
csauto doe spec.toml doe.csv --method lhs --samples 5 --seed 42
```

5 LHS samples of `u_inlet` × 2 levels of `turbulence_model` → 10 rows.

Try the other methods too:

```bash
csauto doe spec.toml doe-ccd.csv --method ccd --force
# sobol requires: pip install "csauto[doe]"
csauto doe spec.toml doe-sobol.csv --method sobol --samples 4 --force
```

(`factorial` will error here since `u_inlet` is continuous — it only accepts
parameters with `levels`.)

## 2. Feed it into prepare

```bash
csauto prepare doe.csv TEMPLATE RUNS
```

Check the generated cases:

```bash
cat RUNS/case0001/DATA/setup.xml
```

Each case's `{u_inlet}`/`{turbulence_model}` placeholders should be resolved
to the values from the corresponding `doe.csv` row.

## 3. Validate

```bash
csauto doctor RUNS
```

(`[FAIL]` on runtime checks is expected/harmless here — this example doesn't
run code_saturne.)

## 4. Browse the dashboard

```bash
csauto serve RUNS --host 127.0.0.1 --port 8000
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) — the **Status** panel
shows all 10 generated cases as `PREPARED`. Don't try to actually launch them
here (no code_saturne runtime is configured in this example). `Ctrl+C` to
stop the server.

## Clean up

```bash
rm -rf RUNS doe.csv doe-ccd.csv doe-sobol.csv
```
