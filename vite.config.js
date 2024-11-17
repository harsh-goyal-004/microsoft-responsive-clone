import { defineConfig } from "vite";

export default defineConfig({
  base: "/dist/",
  build: {
    assetsInlineLimit: 0, // Optional: Prevents assets from being inlined
    outDir: "dist", // Ensures the output directory is correct
  },
  publicDir: "public", // Ensure public assets are served correctly
});
