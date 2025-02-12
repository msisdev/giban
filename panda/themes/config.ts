import { defineThemeContract } from "@pandacss/dev"
import { tokens, semanticTokens } from "panda/tokens"

/*
  This is a type generator that has no value.
  If you want to use theme spefic token values, start from here.
*/
export const defineTheme = defineThemeContract({
  tokens,
  semanticTokens,
})
