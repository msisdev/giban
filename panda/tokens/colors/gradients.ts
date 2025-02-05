import { defineTokens } from "@pandacss/dev"

export const gradients = defineTokens.gradients({
  // lps: { value: "var(--linearPrimarySecondary)" },
  lps: {
    value: {
      type: "linear",
      placement: "to right",
      stops: ["primary", "secondary"],
    },
  },
})
