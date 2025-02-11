import { defineTokens } from "@pandacss/dev"

export const borders = defineTokens.borders({
  text: {
    value: {
      width: "1px",
      color: "{colors.text}",
      style: "solid",
    },
  },
  primary: {
    value: {
      width: "1px",
      color: "{colors.primary}",
      style: "solid",
    },
  },
})
