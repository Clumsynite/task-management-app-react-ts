import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          const packages = id.split("node_modules");
          if (packages.length > 1) {
            return packages[1].split("/")[1];
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  base: "/task-management-app-react-ts",
});
