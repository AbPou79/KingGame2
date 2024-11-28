import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 4321,
  }
});