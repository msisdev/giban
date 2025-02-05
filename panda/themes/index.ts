import { breakpoints } from "panda/tokens/breakpoints"
import { defineTheme } from "./config"
import { colors, gradients } from "panda/tokens/colors"
import { fonts } from "panda/tokens/fonts"
import { sizes } from "panda/tokens/sizes"

export const defaultTheme = defineTheme({
  tokens: { breakpoints, fonts, gradients, sizes },
  semanticTokens: { colors },
})
