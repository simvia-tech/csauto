import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  Bell,
  Container,
  FilePlus2,
  GitCompare,
  Layers,
  LayoutDashboard,
  Package,
  Play,
  Server,
  Sigma,
  Terminal,
  RotateCcw,
  Timer,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Arrow, CardAction, Code, LinkButton, PartTitle, Pill, SiteHeader } from "@/components/ui";

const BASE = "/csauto";
const REPO = "https://github.com/simvia-tech/csauto";
const DOCS = `${BASE}/docs/`;
const MARKETPLACE = "https://marketplace.visualstudio.com/items?itemName=simvia.csauto";
const version = readFileSync(join(process.cwd(), "..", "VERSION"), "utf8").trim();
const INSTALL_CMD = `bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"`;

const navLink = "text-edf-noir underline-offset-4 hover:text-edf-bleu-fonce hover:underline";
const footerLink = "flex items-center gap-1.5 text-sm leading-5 text-edf-noir hover:underline";

const faq = [
  {
    q: "What is csauto?",
    a: "An open-source tool (VS Code extension plus Python CLI) that automates simulation campaigns for code_saturne and code_aster. It generates cases from a parameter table and a template, runs them locally or on Slurm, and follows residuals, probes, errors and timings in a dashboard.",
  },
  {
    q: "Do I need VS Code?",
    a: "No. The extension is the primary interface and embeds the dashboard in the editor, also over Remote-SSH on HPC clusters. On machines without VS Code, the same dashboard runs in your browser with `csauto serve`, and every step is available from the CLI.",
  },
  {
    q: "Which solvers are supported?",
    a: "code_saturne and code_aster. Each solver is one adapter class that the CLI and the dashboard read everything solver-specific from, so adding another is a contained job (see the guide in the docs).",
  },
  {
    q: "Where do my simulations run?",
    a: "On your machine with the native solver, a Docker image or a Singularity/Apptainer image, or on a cluster through Slurm (sbatch, squeue). Local runs are capped to what the machine can take, and you can set the maximum number of parallel cases.",
  },
  {
    q: "Can I stop or extend a running case?",
    a: "For code_saturne, yes: stop gracefully, extend the run or write a checkpoint while it runs, then restart any case from its last checkpoint. No kill, no start from scratch.",
  },
  {
    q: "What do I need installed?",
    a: "The extension manages its own Python environment, so you need Python 3.11+ on the machine and a solver runtime (native binary, Docker or Singularity). The core CLI uses only the Python standard library; the dashboard adds FastAPI and uvicorn.",
  },
];

function Card({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-edf-gris-moyen bg-white p-8">
      <Icon aria-hidden className="size-7 text-edf-bleu-moyen" />
      <h3 className="text-lg font-bold text-edf-bleu-fonce">{title}</h3>
      <p className="text-edf-noir">{children}</p>
    </div>
  );
}

function Shot({ src, title, children }: { src: string; title: string; children: React.ReactNode }) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl bg-edf-gris-clair p-5">
      <div className="aspect-[16/10] overflow-hidden border border-edf-gris-moyen bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/images/${src}`} alt={title} className="size-full object-contain" loading="lazy" />
      </div>
      <figcaption className="flex flex-1 flex-col gap-1">
        <span className="font-bold text-edf-bleu-fonce">{title}</span>
        <span className="text-edf-noir">{children}</span>
      </figcaption>
    </figure>
  );
}

const Mono = ({ children }: { children: React.ReactNode }) => (
  <code className="font-mono text-sm">{children}</code>
);

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "csauto",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Linux, macOS, Windows (WSL)",
        softwareVersion: version,
        license: "https://www.gnu.org/licenses/gpl-3.0.html",
        url: `https://simvia-tech.github.io${BASE}/`,
        codeRepository: REPO,
        downloadUrl: MARKETPLACE,
        publisher: { "@type": "Organization", name: "Simvia", url: "https://simvia.tech" },
        description:
          "Generate, run and monitor code_saturne and code_aster simulation campaigns from VS Code or the command line.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a.replaceAll("`", "") },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader>
        <nav
          aria-label="Main"
          className="flex items-center gap-[30px] rounded-b-2xl border-b border-edf-gris-moyen bg-white px-6 py-2 md:px-10"
        >
          <a href={`${BASE}/`} className="flex shrink-0 items-center gap-3">
            <img src={`${BASE}/images/csauto-mark.svg`} alt="" className="size-8" />
            <span className="text-xl font-bold text-edf-bleu-fonce">csauto</span>
          </a>
          <ul className="ml-auto flex items-center gap-[30px]">
            <li className="hidden lg:block"><a className={navLink} href="#extension">Extension</a></li>
            <li className="hidden lg:block"><a className={navLink} href="#dashboard">Dashboard</a></li>
            <li className="hidden lg:block"><a className={navLink} href="#solvers">Solvers</a></li>
            <li className="hidden sm:block"><a className={navLink} href={DOCS}>Docs</a></li>
            <li className="hidden sm:block"><a className={navLink} href={REPO}>GitHub</a></li>
            <li><LinkButton href="#install">Install</LinkButton></li>
          </ul>
        </nav>
      </SiteHeader>

      <main>
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-20 text-center md:pt-24">
          <Pill>Available on the VS Code Marketplace · v{version}</Pill>
          <h1 className="mt-6 max-w-4xl font-soft text-4xl font-normal text-balance text-edf-bleu-fonce md:text-6xl">
            Simulation campaigns, without leaving VS Code
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-balance text-edf-noir">
            Describe a parameter study in one table. csauto generates every case from your template, runs them
            locally or on Slurm, and follows convergence, errors and timings in a dashboard inside your editor. For
            code_saturne and code_aster.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <LinkButton href={MARKETPLACE} external>Install from the Marketplace</LinkButton>
            <LinkButton href={DOCS} variant="secondary">Read the docs</LinkButton>
          </div>
          <div className="mt-14 w-full rounded-2xl bg-edf-gris-clair p-3 md:p-5">
            <img
              src={`${BASE}/images/ui-overview.png`}
              alt="The csauto Campaigns view and dashboard in VS Code"
              className="w-full border border-edf-gris-moyen bg-white"
            />
          </div>
        </section>

        <section id="extension" className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>From an empty folder to running cases in three steps</PartTitle>
          <ol className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Step 1",
                t: "Create",
                d: "New Campaign walks you through it: pick a solver, start from its ready-to-run example or from your own files, fill the parameter table, choose the runtime and the solver version.",
              },
              {
                n: "Step 2",
                t: "Run",
                d: "csauto generates one case per row, then runs them natively, in Docker, with Singularity or on Slurm. Local runs are throttled to what your machine can take.",
              },
              {
                n: "Step 3",
                t: "Follow",
                d: "The dashboard opens in an editor tab and tells you when cases finish or fail. Restart from a checkpoint or steer a running case from the same place.",
              },
            ].map((s) => (
              <li key={s.n} className="flex flex-col items-start gap-3 rounded-2xl border border-edf-gris-moyen bg-white p-8">
                <Pill color="orange">{s.n}</Pill>
                <h3 className="text-lg font-bold text-edf-bleu-fonce">{s.t}</h3>
                <p className="text-edf-noir">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>Everything happens in your editor</PartTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card icon={FilePlus2} title="New Campaign wizard">
              One page for the solver, the starting point, one file picker per solver input and the parameter table
              written to <Mono>doe.csv</Mono>. A case folder is checked as soon as you pick it.
            </Card>
            <Card icon={LayoutDashboard} title="Dashboard in the editor">
              Embedded in a webview that follows your editor theme. Works over Remote-SSH on HPC clusters and in WSL
              through automatic port forwarding.
            </Card>
            <Card icon={Layers} title="Several campaigns at once">
              The Campaigns view lists each campaign with its solver version and a Dashboard button. Each one gets its
              own server and its own tab, side by side.
            </Card>
            <Card icon={Bell} title="Run notifications">
              Get notified when cases finish or fail, even when the dashboard tab is in the background.
            </Card>
            <Card icon={Package} title="Managed runtime">
              The extension creates a private Python environment and installs a version-matched csauto. No manual
              install, no conflict with your own packages.
            </Card>
            <Card icon={Container} title="Solver versions on tap">
              Pick an installed Docker image, any tag from Docker Hub (downloaded on the spot), a native executable or
              a <Mono>.sif</Mono> image, per campaign.
            </Card>
          </div>
        </section>

        <section id="dashboard" className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>Follow every case from one dashboard</PartTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <Shot src="ui-status.png" title="Status and control">
              Every case in one table with its parameters, state, iteration and duration. Run, kill and clean from a
              selection, add notes, filter by any column.
            </Shot>
            <Shot src="ui-recentErrors.png" title="Errors and warnings">
              The logs of all cases are scanned for you. Anomalies are grouped by severity, file and case, with the
              surrounding lines.
            </Shot>
            <Shot src="ui-log-tail.png" title="Live log tail">
              Follow the solver log of any case as it runs, filtered by severity or text, without opening a terminal.
            </Shot>
            <Shot src="ui-compare.png" title="Compare cases">
              Input files side by side, with only the parameters that differ highlighted, to tie a result back to its
              cause.
            </Shot>
          </div>

          <div className="mt-16 mb-8 flex flex-col items-center gap-3 text-center">
            <Pill>code_saturne</Pill>
            <h3 className="text-xl font-medium text-edf-bleu-fonce">More for code_saturne campaigns</h3>
            <p className="max-w-2xl text-edf-noir">
              For code_saturne, the dashboard also reads the solver's own outputs, and can steer a case while it runs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Shot src="ui-residuals.png" title="Interactive residuals">
              Every case and variable on one log plot. Hover for values, zoom into the tail, toggle series, see every
              restart, export a PNG.
            </Shot>
            <Shot src="ui-probes.png" title="Probes and profiles">
              Compare probe signals and profile data across the whole parameter study on a shared axis.
            </Shot>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card icon={Timer} title="Timing snapshot">
              Elapsed time, linear solver and gradient time per case, from the solver logs.
            </Card>
            <Card icon={RotateCcw} title="Checkpoint and restart">
              Restart any case from its last checkpoint with one click.
            </Card>
            <Card icon={Activity} title="Live control">
              Stop gracefully, extend the run or write a checkpoint while a case is running.
            </Card>
          </div>
        </section>

        <section id="solvers" className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>Two solvers, each one an adapter</PartTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                logo: "code_saturne.svg",
                name: "code_saturne",
                href: "https://www.code-saturne.org/",
                label: "code-saturne.org",
                text: "General-purpose open-source CFD solver developed by EDF R&D. Campaigns get the full dashboard: residuals, probes, timings, checkpoint restart and live steering on top of status, logs and comparison.",
              },
              {
                logo: "code_aster.svg",
                name: "code_aster",
                href: "https://www.code-aster.org/",
                label: "code-aster.org",
                text: "Open-source finite-element solver for structural and thermal mechanics. Campaigns run from an export file, with status tracking, live logs, error detection and comparison.",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="group flex flex-col gap-4 rounded-2xl border border-edf-gris-moyen bg-white p-8 hover:bg-edf-gris-clair"
              >
                <img src={`${BASE}/solvers/${s.logo}`} alt={s.name} className="h-10 w-fit" />
                <p className="flex-1 text-edf-noir">{s.text}</p>
                <span className="underline-offset-4 group-hover:underline">
                  <CardAction>{s.label}</CardAction>
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-edf-noir">
            Another solver is one adapter class that the CLI and the dashboard read everything from.{" "}
            <a className="font-bold text-edf-bleu-fonce underline-offset-4 hover:underline" href={`${DOCS}adding-a-solver`}>
              Read the guide
            </a>
            .
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>The engine behind the dashboard</PartTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card icon={Sigma} title="Parameter study generator">
              Write <Mono>doe.csv</Mono> by hand or generate it from a TOML spec: factorial, Latin Hypercube, Sobol or
              central composite sampling.
            </Card>
            <Card icon={Play} title="Templates with placeholders">
              One template case with <Mono>{"{placeholders}"}</Mono> and conditionals becomes as many fully resolved
              cases as there are rows.
            </Card>
            <Card icon={Server} title="Local, Docker, Singularity, Slurm">
              Runtime auto-detection, a built-in Slurm submission and status tracking through squeue.
            </Card>
            <Card icon={GitCompare} title="Compare and clean up">
              Compare the inputs of any two cases, keep notes per case, and clean results or whole cases from the
              dashboard.
            </Card>
            <Card icon={Terminal} title="A real CLI">
              Everything the extension does is a command, for CI, scripts and machines without VS Code.
            </Card>
            <Card icon={Package} title="Light by design">
              The core CLI is pure Python standard library. The dashboard only adds FastAPI and uvicorn.
            </Card>
          </div>
        </section>

        <section id="install" className="mx-auto max-w-6xl px-6 pb-20">
          <PartTitle>Install csauto</PartTitle>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-edf-gris-clair p-8">
              <Pill color="green">Recommended</Pill>
              <h3 className="text-2xl font-medium text-edf-bleu-fonce">VS Code extension</h3>
              <p className="text-edf-noir">
                Install it from the Marketplace, then click the <strong>csauto</strong> icon in the activity bar and
                choose <strong>New Campaign…</strong>. It works the same over Remote-SSH and in WSL.
              </p>
              <LinkButton href={MARKETPLACE} external>Install from the Marketplace</LinkButton>
              <p className="text-edf-noir">Or from a terminal:</p>
              <Code>code --install-extension simvia.csauto</Code>
              <p className="text-sm text-edf-gris-fonce">
                Needs Python 3.11+ on the machine. Windows through WSL. For an offline machine, download a{" "}
                <a className="font-bold text-edf-bleu-fonce underline-offset-4 hover:underline" href={`${REPO}/releases`}>
                  .vsix from the releases page
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-edf-gris-clair p-8">
              <Pill color="orange">Headless and HPC</Pill>
              <h3 className="text-2xl font-medium text-edf-bleu-fonce">CLI and browser dashboard</h3>
              <p className="text-edf-noir">One line installs the latest release with its own virtual environment and a shell alias:</p>
              <Code>{INSTALL_CMD}</Code>
              <p className="text-edf-noir">Then, from a folder with your parameter table and template:</p>
              <Code>{`csauto prepare doe.csv TEMPLATE RUNS
csauto doctor RUNS
csauto serve RUNS`}</Code>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 pb-24">
          <PartTitle>Frequently asked questions</PartTitle>
          <div className="divide-y divide-edf-gris-moyen border-y border-edf-gris-moyen">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="group/q flex cursor-pointer items-center justify-between gap-4 font-bold text-edf-bleu-fonce">
                  <span className="underline-offset-4 group-hover/q:underline">{f.q}</span>
                  <span aria-hidden className="select-none text-2xl leading-none text-edf-orange-fonce group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-edf-noir">
                  {f.a.split("`").map((part, i) => (i % 2 ? <Mono key={i}>{part}</Mono> : part))}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="rounded-t-2xl border-t border-edf-gris-moyen bg-white px-6 pt-12 pb-8 md:px-10">
        <div className="mb-10">
          <a href="https://simvia.tech" className="inline-block">
            <img src={`${BASE}/images/simvia-logo.svg`} alt="Simvia" className="w-40" />
          </a>
        </div>
        <nav aria-label="Footer">
          <ul className="flex list-none flex-wrap gap-x-10 gap-y-4">
            <li><a className={footerLink} href={DOCS}>Documentation</a></li>
            <li><a className={footerLink} href={MARKETPLACE}>Marketplace <Arrow external className="size-4" /></a></li>
            <li><a className={footerLink} href={REPO}>GitHub <Arrow external className="size-4" /></a></li>
            <li><a className={footerLink} href={`${REPO}/releases`}>Releases <Arrow external className="size-4" /></a></li>
            <li><a className={footerLink} href={`${REPO}/blob/main/CHANGELOG.md`}>Changelog <Arrow external className="size-4" /></a></li>
            <li><a className={footerLink} href={`${REPO}/blob/main/ROADMAP.md`}>Roadmap <Arrow external className="size-4" /></a></li>
            <li><a className={footerLink} href="https://simvia.tech">simvia.tech <Arrow external className="size-4" /></a></li>
          </ul>
        </nav>
        <p className="mt-8 text-sm text-edf-gris-fonce">csauto © 2026 Simvia. Released under the GPL-3.0 license.</p>
      </footer>
    </>
  );
}
