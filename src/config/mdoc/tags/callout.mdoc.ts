import { component } from '@astrojs/markdoc/config';

export default {
  render: component("./src/components/mdoc/tags/Callout.astro"),
  attributes: {
    type: {
      type: String,
    },
  },
}
