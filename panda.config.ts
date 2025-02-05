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

  // Useful for theme customization
  theme: {
    extend: panda.themes.defaultTheme,
  },

  globalCss: panda.globalCss,

  // The output directory for your css system
  outdir: "styled-system",
})
