import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import EnvironmentPlugin from "vite-plugin-environment";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: "assets"
  },
  plugins: [
    vue(),
    vueJsx(),
    EnvironmentPlugin(["BASE_URL","MOCK_DATA", "API_URL"])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
