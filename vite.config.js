import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [react(), babel()],
});
