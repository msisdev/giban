import { defineTheme } from "./config"
import { tokens, semanticTokens } from "panda/tokens"

// A theme can handle both light and dark modes
export const defaultTheme = defineTheme({
  tokens,
  semanticTokens,
})
