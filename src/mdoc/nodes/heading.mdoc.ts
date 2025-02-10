import { nodes, component } from "@astrojs/markdoc/config"

export default {
  ...nodes.heading,
  render: component("./src/components/mdoc/nodes/Heading.astro"),
}
