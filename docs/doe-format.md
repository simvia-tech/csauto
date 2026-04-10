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
