import { component, nodes } from '@astrojs/markdoc/config'

export default {
  ...nodes.link,
  render: component("./src/components/mdoc/nodes/Link.astro")
}
