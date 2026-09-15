# Running a campaign on Qarnot

csauto can send cases to the [Qarnot](https://qarnot.com) cloud instead of running
them on this machine. You run them on **your own Qarnot account**: csauto submits
on your behalf, and Simvia hosts nothing, bills nothing and sees nothing.

Supported solvers: code_saturne and the `stub` test solver. code_aster is not
supported yet, because its adapter composes its whole launch line locally
instead of producing a command a remote container can run; `csauto doctor
--backend qarnot` says so.

## Setup

```bash
pip install "csauto[qarnot]"
export QARNOT_TOKEN="<the token from your Qarnot console>"
csauto doctor RUNS --backend qarnot
```

**The token goes in the environment, never in `csauto.toml`.** That file lives in
the campaign directory, which gets shared, committed and archived. csauto
refuses to start if it finds a token in there.

## Launching from the dashboard

Start `csauto serve`, select the cases, press **Run**, and pick `qarnot` in the
**Run on** selector. The dialog restates how many cases are about to be
submitted before anything is sent.

The selector only appears once the server can offer a backend, and the choice
applies to that launch alone, so a campaign can be split between this machine
and the cloud.

## Settings

`csauto.toml` carries the non-sensitive settings only:

```toml
[qarnot]
profile = "docker-batch"     # the Qarnot profile
snapshot_interval_s = 60     # how often the remote task captures the watched files
max_upload_mb = 512          # refuse a case whose own inputs exceed this
```

Two more settings govern how often csauto looks:

```toml
backend_poll_interval_s = 15   # status, progress, stdout and stderr
backend_sync_interval_s = 60   # pull the captured files
```

Pulling more often than the task captures only wastes requests, so keep
`backend_sync_interval_s` at or above `snapshot_interval_s`.

## What is uploaded, and what comes back

| Bucket | Content | Uploaded |
|---|---|---|
| `csauto-<campaign>-<hash>-shared` | the shared directories (`MESH`, `POST`) | once per campaign, and again only if they change |
| `csauto-<campaign>-<hash>-<case>` | the case's own inputs (`DATA/`, `SRC/`, `doe_row.csv`, ...) | once per case |
| `csauto-<campaign>-<hash>-<case>-out` | snapshots and results | written by the task |

While a case runs, only the files the solver adapter declares as observability
files come back (for code_saturne: the listing, the residuals, the monitoring
probes and the run status markers). That is a few hundred kB, which keeps the
snapshot well under the 1 GB Qarnot advises. The complete results directory is
downloaded once, when the task finishes.

Because those files genuinely land in `RUNS/caseXXXX/`, the dashboard's
residuals, probes, log tail and error panels work during a cloud run exactly as
they do locally.

## Monitoring

Live monitoring goes through `csauto serve`: the polling loop lives in the
server. From the CLI, `csauto status RUNS` performs one poll and one sync, at
most once every ten seconds.

## What the statuses mean

- `PENDING`: submitted, waiting for machines.
- `RUNNING`: executing, or uploading and downloading its results.
- `DONE`: **the results are on local disk.** csauto never reports `DONE` before
  the download succeeded, because Compare, Clean and the size figures all read
  local files.
- `FAILED`: the task failed, or was cancelled.

A failed poll never changes a status. A flaky network must not mark a hundred
cases as failed, so consecutive failures are counted and reported instead.

## Costs

csauto shows no price estimate: it has no pricing figure it can vouch for, and a
wrong number on a launch button would be worse than none. What it does do is
refuse an oversized upload before submission, and record the execution time and
core count of each case afterwards.
