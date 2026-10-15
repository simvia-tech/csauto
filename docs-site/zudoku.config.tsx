import type { ZudokuConfig } from "zudoku";

/* Pages are built from ../docs by scripts/sync-docs.mjs. */
const config: ZudokuConfig = {
  basePath: "/csauto/docs",
  site: {
    title: "csauto",
    logo: {
      src: { light: "/logo.svg", dark: "/logo.svg" },
      alt: "csauto",
      width: "44px",
    },
  },
  metadata: { favicon: "/favicon.svg", title: "%s | csauto", description: "Documentation for csauto, simulation campaigns for code_saturne and code_aster." },
  theme: {
    customCss: `
      @font-face { font-family: "EDF2020"; font-weight: 300; src: url("/csauto/docs/fonts/EDF2020W05-Light.woff2") format("woff2"); font-display: swap; }
      @font-face { font-family: "EDF2020"; font-weight: 400; src: url("/csauto/docs/fonts/EDF2020W05-Regular.woff2") format("woff2"); font-display: swap; }
      @font-face { font-family: "EDF2020"; font-weight: 700; src: url("/csauto/docs/fonts/EDF2020W05-Bold.woff2") format("woff2"); font-display: swap; }
      :root { --font-sans: "EDF2020", ui-sans-serif, system-ui, sans-serif; --heading: #001a70; --sidebar: #f8f7f7; --sidebar-accent: #dbe6f7; --sidebar-accent-foreground: #001a70; --sidebar-primary: #005bff; --sidebar-border: #e0e0e0; }
      .dark { --heading: #ffffff; --sidebar: #0a1238; --sidebar-accent: #1b2a6b; --sidebar-accent-foreground: #ffffff; --sidebar-primary: #1089ff; --sidebar-border: #ffffff1f; }
      body { font-family: var(--font-sans); }
      h1, h2, h3 { color: var(--heading); }
      h1 { font-weight: 500; }
      a[href="https://github.com/simvia-tech/csauto"]::before { content: ""; display: inline-block; width: 16px; height: 16px; margin-right: 8px; vertical-align: -2px; background: currentColor; -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z%22/%3E%3C/svg%3E") center / contain no-repeat; mask: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z%22/%3E%3C/svg%3E") center / contain no-repeat; }
      a[href="https://simvia-tech.github.io/csauto/"]::before { content: ""; display: inline-block; width: 16px; height: 16px; margin-right: 8px; vertical-align: -2px; background: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Cg fill=%22%2357ACB0%22%3E%3Crect width=%2240%22 height=%224%22/%3E%3Crect width=%224%22 height=%2240%22/%3E%3Crect x=%2236%22 width=%224%22 height=%2212%22/%3E%3Crect y=%2236%22 width=%2212%22 height=%224%22/%3E%3Crect x=%2212%22 y=%2212%22 width=%2240%22 height=%224%22/%3E%3Crect x=%2212%22 y=%2212%22 width=%224%22 height=%2240%22/%3E%3Crect x=%2248%22 y=%2212%22 width=%224%22 height=%2212%22/%3E%3Crect x=%2212%22 y=%2248%22 width=%2212%22 height=%224%22/%3E%3C/g%3E%3Crect x=%2228%22 y=%2228%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%232563A6%22 stroke-width=%224%22/%3E%3Cpolyline points=%2231,31 38,45 44,41 50,52%22 fill=%22none%22 stroke=%22%232563A6%22 stroke-width=%224%22 stroke-linecap=%22square%22/%3E%3Crect x=%2250%22 y=%2248%22 width=%229%22 height=%229%22 fill=%22%23168C9B%22/%3E%3C/svg%3E") center / contain no-repeat; }
      body *:not(code, code *, pre, pre *, kbd, svg, svg *) { font-family: var(--font-sans); }
    `,
    light: {
      background: "#ffffff",
      foreground: "#333333",
      card: "#ffffff",
      cardForeground: "#333333",
      popover: "#ffffff",
      popoverForeground: "#333333",
      primary: "#005bff",
      primaryForeground: "#ffffff",
      secondary: "#f8f7f7",
      secondaryForeground: "#001a70",
      muted: "#f8f7f7",
      mutedForeground: "#666666",
      accent: "#dbe6f7",
      accentForeground: "#001a70",
      border: "#e0e0e0",
      input: "#e0e0e0",
      ring: "#005bff",
      radius: "0.25rem",
    },
    dark: {
      background: "#060c2a",
      foreground: "#f8f7f7",
      card: "#0a1238",
      cardForeground: "#f8f7f7",
      popover: "#0a1238",
      popoverForeground: "#f8f7f7",
      primary: "#1089ff",
      primaryForeground: "#001a70",
      secondary: "#111c4f",
      secondaryForeground: "#f8f7f7",
      muted: "#111c4f",
      mutedForeground: "#c5cadd",
      accent: "#1b2a6b",
      accentForeground: "#ffffff",
      border: "#ffffff26",
      input: "#ffffff26",
      ring: "#1089ff",
      radius: "0.25rem",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book-open",
      items: [
        {
          type: "category",
          label: "Getting started",
          icon: "sparkles",
          items: ["/introduction", "/installation", "/extension", "/concepts", "/quickstart"],
        },
        {
          type: "category",
          label: "Daily use",
          icon: "layout-dashboard",
          items: ["/web-ui", "/task-cookbook", "/run-lifecycle"],
        },
        {
          type: "category",
          label: "Reference",
          icon: "book-open",
          items: ["/config", "/doe-format", "/formats", "/cli", "/api", "/limitations", "/telemetry"],
        },
        {
          type: "category",
          label: "Help",
          icon: "life-buoy",
          items: ["/troubleshooting"],
        },
        {
          type: "category",
          label: "Contributing",
          icon: "git-pull-request",
          items: ["/architecture", "/adding-a-solver"],
        },
      ],
    },
    { type: "link", to: "https://simvia-tech.github.io/csauto/", label: "csauto" },
    { type: "link", to: "https://github.com/simvia-tech/csauto", label: "GitHub" },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
};

export default config;
