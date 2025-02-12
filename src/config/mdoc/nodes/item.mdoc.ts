import { component, nodes } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'

export default {
  ...nodes.item,
  render: component("./src/components/mdoc/nodes/Item.astro"),
} satisfies MarkdocComponent
