import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { allowedHosts: ["terminal.local"] },
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        portfolio: "index.html",
        unifateciePrototype: "unifatecie-prototype.html",
      },
    },
  },
});
