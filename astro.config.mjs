import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), vue()],
  output: "server",
  adapter: vercel()
});