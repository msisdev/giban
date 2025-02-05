// @ts-check
import { defineConfig } from "astro/config"
import markdoc from "@astrojs/markdoc"
import pagefind from "astro-pagefind"

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdoc(),
    pagefind(),
  ],
})
