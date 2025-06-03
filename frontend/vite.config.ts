/** @format */

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: true, // Don't try other ports if 5173 is taken
    watch: {
      usePolling: true, // Enable polling for better Docker compatibility
    },
  },
});
