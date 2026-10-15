/* Builds docs-site/pages from ../docs, which stays the source of truth (it is read on GitHub too).
   Each page gets a front matter title from its first heading and its relative links rewritten. */
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../", import.meta.url).pathname;
const docs = join(root, "docs");
const pages = join(root, "docs-site", "pages");
const repo = "https://github.com/simvia-tech/csauto/blob/main";

rmSync(pages, { recursive: true, force: true });
mkdirSync(pages, { recursive: true });
mkdirSync(join(root, "docs-site", "public", "assets"), { recursive: true });
cpSync(join(docs, "assets"), join(root, "docs-site", "public", "assets"), { recursive: true });

cpSync(join(root, "docs-site", "intro"), pages, { recursive: true });

const skip = new Set(["README.md", "contributing.md"]);

for (const file of readdirSync(docs).filter((f) => f.endsWith(".md") && !skip.has(f))) {
  let text = readFileSync(join(docs, file), "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
  const heading = text.match(/^# (.+)$/m);
  const title = heading ? heading[1].trim() : file.replace(/\.md$/, "");
  if (heading) text = text.replace(heading[0], "").replace(/^\s+/, "");
  text = text
    .replace(/\]\(\.\/assets\//g, "](/assets/")
    .replace(/\]\(\.\/([a-z-]+)\.md(#[^)]*)?\)/g, (_, name, hash = "") => `](/${name}${hash})`)
    .replace(/\]\(\.\.\/([^)]+)\)/g, (_, path) => `](${repo}/${path})`)
    .replace(/\]\(\.\/(DEVELOPMENT\.md)\)/g, `](${repo}/$1)`);
  writeFileSync(join(pages, file), `---\ntitle: ${JSON.stringify(title)}\n---\n\n${text}`);
}
