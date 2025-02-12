import { component } from '@astrojs/markdoc/config'
import type { MarkdocComponent } from '../config'


export default {
  render: component("./src/components/mdoc/tags/Callout.astro"),
  attributes: {
    type: {
      type: String,
    },
  },
} satisfies MarkdocComponent
