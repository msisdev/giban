import { defineTokens } from "@pandacss/dev"

export const lineHeights = defineTokens.lineHeights({
  xs: { value: "calc(1 / 0.75)" },
  sm: { value: "calc(1.25 / 0.875) " },
  base: { value: "calc(1.5 / 1)" },
  lg: { value: "calc(1.75 / 1.125)" },
  xl: { value: "calc(1.75 / 1.25)" },
  "2xl": { value: "calc(2 / 1.5)" },
  "3xl": { value: "calc(2.25 / 1.875)" },
  "4xl": { value: "calc(2.5 / 2.25)" },
  "5xl": { value: "1" },
  "6xl": { value: "1" },
  "7xl": { value: "1" },
  "8xl": { value: "1" },
  "9xl": { value: "1" },
})
