import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: "index.html",
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
});
