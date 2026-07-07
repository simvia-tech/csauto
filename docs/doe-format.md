# DOE Format

The parameter table (`doe.csv`) drives case generation. One row = one case.

---

## Minimal example

```csv
case_id,u_inlet,turbulence_model,use_radiation
case0001,12.0,k-epsilon,false
case0002,15.0,k-omega,true
```

The corresponding template excerpt:

```xml
<!-- TEMPLATE/DATA/setup.xml -->
<inlet label="INLET">
  <velocity>{u_inlet}</velocity>
  <turbulence model="{turbulence_model}"/>
</inlet>

<!-- IF use_radiation=true -->
<radiative_transfer model="DOM"/>
<!-- ENDIF -->
```

After `csauto prepare`, `case0001/DATA/setup.xml` becomes:

```xml
<inlet label="INLET">
  <velocity>12.0</velocity>
  <turbulence model="k-epsilon"/>
</inlet>
```

And `case0002/DATA/setup.xml` becomes:

```xml
<inlet label="INLET">
  <velocity>15.0</velocity>
  <turbulence model="k-omega"/>
</inlet>

<radiative_transfer model="DOM"/>
```

---

## Generating doe.csv with `csauto doe`

Instead of hand-writing `doe.csv`, generate it from a parameter spec:

```bash
csauto doe spec.toml doe.csv --method lhs --samples 40 --seed 42
```

The spec is a TOML file with one `[parameters.<name>]` table per column. Each
parameter is either **continuous** (sampled within a range) or **discrete**
(an explicit list of levels):

```toml
[parameters.u_inlet]
min = 0.5
max = 5.0

[parameters.turbulence_model]
levels = ["k-epsilon", "k-omega-sst"]
```

Parameter names follow the same character rules as placeholders (letters,
digits, `.`, `_`, `-`) and `case_id` is reserved.

### Methods

| `--method` | Use case | Notes |
|---|---|---|
| `factorial` | All combinations of discrete levels | Every parameter must define `levels` (no continuous ranges) |
| `lhs` | Space-filling Latin Hypercube sampling | `--samples N` required; pure stdlib |
| `sobol` | Low-discrepancy quasi-random sampling | `--samples N` required, ideally a power of 2; requires `pip install "csauto[doe]"` |
| `ccd` | Face-centered central composite design | Corner + axial + center points, always within `[min, max]` |

### Mixing continuous and discrete parameters

For `lhs`/`sobol`/`ccd`, continuous parameters are sampled using the chosen
method, and discrete parameters are crossed with every sample (outer
product) — e.g. 10 LHS samples over one continuous parameter crossed with a
2-level discrete parameter yields 20 rows.

Continuous values are rounded to `--round` digits (default 6). Use `--seed`
to make `lhs`/`sobol` reproducible (same spec + seed always yields the same
CSV). Pass `--force` to overwrite an existing output file.

---

## `case_id` rules

- The `case_id` column is optional
- If absent, IDs are auto-generated in sequence: `case0001`, `case0002`, ...
- If provided:
  - Must be non-empty
  - Allowed characters: letters, digits, `.`, `_`, `-`
  - `/` and `\` are forbidden
- Example valid IDs: `case0001`, `run-A`, `mesh.fine`

---

## Placeholder syntax

Write `{column_name}` anywhere in your template files:

```xml
<velocity>{u_inlet}</velocity>
```

Rules:
- Every placeholder must have a matching column in the DOE header
- Active placeholders cannot have an empty value
- Shell-style `${VAR}` patterns are ignored (not processed)
- Placeholders work in `setup.xml`, `run.cfg`, and `SRC/*.cpp` user files

---

## Conditional blocks (IF/ENDIF)

Include or exclude sections based on DOE values:

```xml
<!-- IF use_radiation=true -->
<radiative_transfer model="DOM"/>
<!-- ENDIF -->
```

Supported forms:

| Syntax | Included when |
|---|---|
| `<!-- IF key -->` | value is non-empty and not `false`/`0` |
| `<!-- IF key=value -->` | value matches exactly |
| `<!-- IF key!=value -->` | value does not match |

The condition variable (`key`) must also have a matching column in the DOE header.

---

## Empty values and unused columns

- **Empty value for an active placeholder**: error — csauto stops with
  `Missing placeholder values for caseXXXX`
- **Unused column** (no matching placeholder or IF condition): allowed, reported as
  a warning
- **Empty value inside an inactive IF block**: allowed — the block is skipped

---

## Larger example

```csv
case_id,u_inlet,rho,mu,turbulence_model,use_radiation,radiation_model
case0001,10.0,1.2,1.8e-5,k-epsilon,false,
case0002,10.0,1.2,1.8e-5,k-omega,false,
case0003,15.0,1.2,1.8e-5,k-epsilon,true,P-1
case0004,15.0,1.2,1.8e-5,k-omega,true,DOM
```

Notes:
- `radiation_model` is empty for `case0001` and `case0002` — this is fine because
  the template wraps `{radiation_model}` inside `<!-- IF use_radiation=true -->`
- The IF block is skipped entirely for those cases, so the empty value is never
  activated
