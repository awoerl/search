import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    manifest: true,
    outDir:
      "/Applications/CONTENTSERV/htdocs/master/BSLive/modules/deepsearch/react/",
    emptyOutDir: true,
  },
});
