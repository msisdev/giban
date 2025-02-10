import { defineMarkdocConfig, component } from '@astrojs/markdoc/config'
import shiki from'@astrojs/markdoc/shiki'
import * as nodes from "@/config/mdoc/nodes"
import * as tags from "@/config/mdoc/tags"

export default defineMarkdocConfig({
  nodes,
  tags,
  extends: [
    shiki({
      theme:'one-dark-pro',
    }),
  ],
})
