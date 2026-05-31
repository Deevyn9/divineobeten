// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://divineobeten.xyz",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), compress()],
});
