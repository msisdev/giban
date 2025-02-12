import { component, nodes } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'

export default {
  ...nodes.image,
  render: component("./src/components/mdoc/nodes/Image.astro"),
} satisfies MarkdocComponent
