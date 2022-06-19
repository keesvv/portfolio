import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePluginFonts as fonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    fonts({
      custom: {
        families: { Inter: "./src/assets/fonts/Inter-*" },
      },
    }),
  ],
});
