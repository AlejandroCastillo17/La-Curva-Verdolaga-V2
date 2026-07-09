import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    // Esto asegura que la comunicación entre tu código y el navegador no se bloquee
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 24678,
    },
  },
});
