import { component, nodes } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'

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
} satisfies MarkdocComponent
