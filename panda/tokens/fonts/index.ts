import { defineGlobalFontface, defineTokens } from "@pandacss/dev"

// This code creates font faces from your font file.
export const globalFontFace = defineGlobalFontface({
  // "My Font Family": {
  //   src: [
  //     'url(/fonts/my-font.woff2) format("woff2")',
  //     'url(/fonts/my-font.woff) format("woff")',
  //   ],
  //   fontWeight: 400,
  //   fontStyle: 'normal',
  //   fontDisplay: 'swap'
  // }
})

// This code creates typesafe tokens from css variables
export const fonts = defineTokens.fonts({
  // "my-font": { value: 'var(--font-my-font), serif' },

  dodum: { value: "var(--font-gowun-dodum), sans-serif" },
  base: { value: "{fonts.dodum} sans-serif" },
})
