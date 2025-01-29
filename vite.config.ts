import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Алиас для путей
      path: "path-browserify", // Замена встроенного модуля Node.js
    },
  },
});
