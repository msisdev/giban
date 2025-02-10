import { component, defineMarkdocConfig, nodes } from '@astrojs/markdoc/config'

export default {
  render: component('./src/components/mdoc/tags/Figure.astro'),
  attributes: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    caption: {
      type: String,
    },
    ...nodes.image.attributes
  },
}
