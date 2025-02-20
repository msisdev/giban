import { component, nodes } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'

export default {
  ...nodes.blockquote,
  render: component("./src/components/mdoc/nodes/Blockquote.astro"),
} satisfies MarkdocComponent
