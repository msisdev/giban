import { component, nodes } from '@astrojs/markdoc/config'

export default {
  ...nodes.item,
  render: component("./src/components/mdoc/nodes/Item.astro")
}
