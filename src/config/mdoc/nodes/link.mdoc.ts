import { component, nodes } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'

export default {
  ...nodes.link,
  render: component("./src/components/mdoc/nodes/Link.astro"),
} satisfies MarkdocComponent
