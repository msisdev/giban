import { defineTokens } from "@pandacss/dev"

export const borders = defineTokens.borders({
  primary: {
    value: {
      width: "1px",
      color: "{colors.primary}",
      style: "solid",
    },
  },
})
