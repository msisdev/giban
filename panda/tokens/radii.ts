import { defineSemanticTokens } from "@pandacss/dev"

export const radii = defineSemanticTokens.radii({
  box: { value: "{radii.2xl}" },
  item: { value: "{radii.xl}" },
  tooltip: { value: "{radii.lg}" },
})
