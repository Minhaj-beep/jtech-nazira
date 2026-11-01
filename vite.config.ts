import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep videos/images as static assets copied as-is rather than inlined.
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "index.html",
        privacy: "privacy-policy/index.html",
      },
    },
  },
});
