# /panda/tokens/colors

https://www.realtimecolors.com/?colors=0d1210-eaf0ee-374e47-a2abbe-59587e&fonts=Inter-Inter

## How to change color

1. Go to [Realtime Colors](https://www.realtimecolors.com/)
2. Roll the dice
3. Export
  - Click tab `Custom Code`
  - Copy & Paste code below
  - Copy result into `./colors.ts`

## Custom Code
```
import { defineSemanticTokens } from "@pandacss/dev"

export const colors = defineSemanticTokens.colors({
  text: {
    DEFAULT: { value: { base: "${textL.oklch}", _dark: "${textD.oklch}" } },
    50: { value: { base: "${text.oklch.95}", _dark: "${text.oklch.5}" }, },
    100: { value: { base: "${text.oklch.90}", _dark: "${text.oklch.10}" }, },
    200: { value: { base: "${text.oklch.80}", _dark: "${text.oklch.20}" }, },
    300: { value: { base: "${text.oklch.70}", _dark: "${text.oklch.30}" }, },
    400: { value: { base: "${text.oklch.60}", _dark: "${text.oklch.40}" }, },
    500: { value: { base: "${text.oklch.50}", _dark: "${text.oklch.50}" }, },
    600: { value: { base: "${text.oklch.40}", _dark: "${text.oklch.60}" }, },
    700: { value: { base: "${text.oklch.30}", _dark: "${text.oklch.70}" }, },
    800: { value: { base: "${text.oklch.20}", _dark: "${text.oklch.80}" }, },
    900: { value: { base: "${text.oklch.10}", _dark: "${text.oklch.90}" }, },
    950: { value: { base: "${text.oklch.5}", _dark: "${text.oklch.95}" }, },
  },
  bg: {
    DEFAULT: { value: { base: "${bgL.oklch}", _dark: "${bgD.oklch}" } },
    50: { value: { base: "${bg.oklch.95}", _dark: "${bg.oklch.5}" }, },
    100: { value: { base: "${bg.oklch.90}", _dark: "${bg.oklch.10}" }, },
    200: { value: { base: "${bg.oklch.80}", _dark: "${bg.oklch.20}" }, },
    300: { value: { base: "${bg.oklch.70}", _dark: "${bg.oklch.30}" }, },
    400: { value: { base: "${bg.oklch.60}", _dark: "${bg.oklch.40}" }, },
    500: { value: { base: "${bg.oklch.50}", _dark: "${bg.oklch.50}" }, },
    600: { value: { base: "${bg.oklch.40}", _dark: "${bg.oklch.60}" }, },
    700: { value: { base: "${bg.oklch.30}", _dark: "${bg.oklch.70}" }, },
    800: { value: { base: "${bg.oklch.20}", _dark: "${bg.oklch.80}" }, },
    900: { value: { base: "${bg.oklch.10}", _dark: "${bg.oklch.90}" }, },
    950: { value: { base: "${bg.oklch.5}", _dark: "${bg.oklch.95}" }, },
  },
  primary: {
    DEFAULT: { value: { base: "${primaryL.oklch}", _dark: "${primaryD.oklch}" } },
    50: { value: { base: "${primary.oklch.95}", _dark: "${primary.oklch.5}" }, },
    100: { value: { base: "${primary.oklch.90}", _dark: "${primary.oklch.10}" }, },
    200: { value: { base: "${primary.oklch.80}", _dark: "${primary.oklch.20}" }, },
    300: { value: { base: "${primary.oklch.70}", _dark: "${primary.oklch.30}" }, },
    400: { value: { base: "${primary.oklch.60}", _dark: "${primary.oklch.40}" }, },
    500: { value: { base: "${primary.oklch.50}", _dark: "${primary.oklch.50}" }, },
    600: { value: { base: "${primary.oklch.40}", _dark: "${primary.oklch.60}" }, },
    700: { value: { base: "${primary.oklch.30}", _dark: "${primary.oklch.70}" }, },
    800: { value: { base: "${primary.oklch.20}", _dark: "${primary.oklch.80}" }, },
    900: { value: { base: "${primary.oklch.10}", _dark: "${primary.oklch.90}" }, },
    950: { value: { base: "${primary.oklch.5}", _dark: "${primary.oklch.95}" }, },
  },
  secondary: {
    DEFAULT: { value: { base: "${secondaryL.oklch}", _dark: "${secondaryD.oklch}" } },
    50: { value: { base: "${secondary.oklch.95}", _dark: "${secondary.oklch.5}" }, },
    100: { value: { base: "${secondary.oklch.90}", _dark: "${secondary.oklch.10}" }, },
    200: { value: { base: "${secondary.oklch.80}", _dark: "${secondary.oklch.20}" }, },
    300: { value: { base: "${secondary.oklch.70}", _dark: "${secondary.oklch.30}" }, },
    400: { value: { base: "${secondary.oklch.60}", _dark: "${secondary.oklch.40}" }, },
    500: { value: { base: "${secondary.oklch.50}", _dark: "${secondary.oklch.50}" }, },
    600: { value: { base: "${secondary.oklch.40}", _dark: "${secondary.oklch.60}" }, },
    700: { value: { base: "${secondary.oklch.30}", _dark: "${secondary.oklch.70}" }, },
    800: { value: { base: "${secondary.oklch.20}", _dark: "${secondary.oklch.80}" }, },
    900: { value: { base: "${secondary.oklch.10}", _dark: "${secondary.oklch.90}" }, },
    950: { value: { base: "${secondary.oklch.5}", _dark: "${secondary.oklch.95}" }, },
  },
  accent: {
    DEFAULT: { value: { base: "${accentL.oklch}", _dark: "${accentD.oklch}" } },
    50: { value: { base: "${accent.oklch.95}", _dark: "${accent.oklch.5}" }, },
    100: { value: { base: "${accent.oklch.90}", _dark: "${accent.oklch.10}" }, },
    200: { value: { base: "${accent.oklch.80}", _dark: "${accent.oklch.20}" }, },
    300: { value: { base: "${accent.oklch.70}", _dark: "${accent.oklch.30}" }, },
    400: { value: { base: "${accent.oklch.60}", _dark: "${accent.oklch.40}" }, },
    500: { value: { base: "${accent.oklch.50}", _dark: "${accent.oklch.50}" }, },
    600: { value: { base: "${accent.oklch.40}", _dark: "${accent.oklch.60}" }, },
    700: { value: { base: "${accent.oklch.30}", _dark: "${accent.oklch.70}" }, },
    800: { value: { base: "${accent.oklch.20}", _dark: "${accent.oklch.80}" }, },
    900: { value: { base: "${accent.oklch.10}", _dark: "${accent.oklch.90}" }, },
    950: { value: { base: "${accent.oklch.5}", _dark: "${accent.oklch.95}" }, },
  },
})
```
