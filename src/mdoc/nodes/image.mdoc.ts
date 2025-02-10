import { component, nodes } from '@astrojs/markdoc/config'

export default {
  ...nodes.image,
  render: component("./src/components/mdoc/nodes/Image.astro")
}
