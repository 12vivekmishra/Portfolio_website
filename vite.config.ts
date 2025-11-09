import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: ".", // ✅ Allow Vite to use index.html from root
  server: {
    host: "::",
    port: 8080,
    fs: {
      // ✅ Allow serving from root, client, shared, and public
      allow: [
        ".",
        "./client",
        "./shared",
        "./public",
        "./server" // optional if you import shared types
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only during dev
    configureServer(server) {
      const app = createServer();

      // ✅ Attach Express middleware
      server.middlewares.use(app);
    },
  };
}
