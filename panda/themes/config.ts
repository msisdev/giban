import { defineThemeContract } from "@pandacss/dev"
import { breakpoints } from "panda/tokens/breakpoints"
import { colors, gradients } from "panda/tokens/colors"
import { fonts } from "panda/tokens/fonts"
import { sizes } from "panda/tokens/sizes"

// This is a type generator that has no value.
// Add custom tokens here first.
export const defineTheme = defineThemeContract({
  tokens: { breakpoints, fonts, gradients, sizes },
  semanticTokens: { colors },
})
