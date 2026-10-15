import type { NextConfig } from "next";

/* Static export for GitHub Pages. The docs build (../docs-site) is merged under /docs by CI. */
const config: NextConfig = {
  output: "export",
  basePath: "/csauto",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default config;
