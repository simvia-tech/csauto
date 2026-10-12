import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(import.meta.dirname),
  base: "./",
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/index.[ext]",
      },
    },
  },
  plugins: [svelte(), tailwindcss()],
});
