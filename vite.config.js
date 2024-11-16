// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsInlineLimit: 0, // Set to 0 to avoid inline base64 encoding for large files
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
});
