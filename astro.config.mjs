// @ts-check
import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"
import markdoc from "@astrojs/markdoc"
import pagefind from "astro-pagefind"

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [
    markdoc(),
    pagefind(),
  ],
})
