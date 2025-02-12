import { defineConfig } from "@pandacss/dev"
import * as panda from "panda"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Files to scan for css declaration
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude from css generation
  exclude: [],

  globalFontface: panda.globalFontFace,

  // https://panda-css.com/docs/guides/multiple-themes#multi-theme-tokens
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: panda.themes.defaultTheme,
  },

  // Default styles
  globalCss: panda.globalCss,

  // https://panda-css.com/docs/guides/dynamic-styling#using-static-css
  staticCss: {
  },

  // The output directory for your css system
  outdir: "styled-system",
})
