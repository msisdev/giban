import { defineThemeContract } from "@pandacss/dev"
import { tokens, semanticTokens } from "panda/tokens"

// This is a type generator that has no value.
// Add custom tokens here first.
export const defineTheme = defineThemeContract({
  tokens,
  semanticTokens,
})
