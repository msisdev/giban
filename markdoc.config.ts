// https://docs.astro.build/en/guides/integrations-guide/markdoc/
import { defineMarkdocConfig } from '@astrojs/markdoc/config'
import shiki from'@astrojs/markdoc/shiki'
import * as nodes from "@/config/mdoc/nodes"
import * as tags from "@/config/mdoc/tags"

export default defineMarkdocConfig({
  nodes,
  tags,
  extends: [
    // https://shiki.style/
    shiki({
      theme: "catppuccin-frappe",
    }),
  ],
})
