import { defineConfig } from "@pandacss/dev"
import * as panda from "panda"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  globalFontface: panda.globalFontFace,

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Useful for theme customization
  theme: {
    extend: panda.themes.defaultTheme,
  },

  // Default styles
  globalCss: panda.globalCss,

  // Styles that will always be prepared
  staticCss: {},

  // The output directory for your css system
  outdir: "styled-system",
})
