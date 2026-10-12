import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      adapter: adapter({
        pages: "../csauto/_frontend",
        assets: "../csauto/_frontend",
        fallback: "index.html",
        strict: false,
      }),
    }),
  ],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
});
