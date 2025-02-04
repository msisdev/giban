import { component } from '@astrojs/markdoc/config';

export default {
  render: component("./src/components/mdoc/Callout.astro"),
  attributes: {
    type: {
      type: String,
    },
  },
}
