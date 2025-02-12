import { nodes, component } from "@astrojs/markdoc/config"
import type { MarkdocComponent } from "../config"

export default {
  ...nodes.heading,
  render: component("./src/components/mdoc/nodes/Heading.astro"),
} satisfies MarkdocComponent
