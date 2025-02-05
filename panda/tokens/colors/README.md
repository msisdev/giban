# /panda/tokens/colors

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
    50: { value: { base: "${textL.oklch.5}", _dark: "${textD.oklch.5}" }, },
    100: { value: { base: "${textL.oklch.10}", _dark: "${textD.oklch.10}" }, },
    200: { value: { base: "${textL.oklch.20}", _dark: "${textD.oklch.20}" }, },
    300: { value: { base: "${textL.oklch.30}", _dark: "${textD.oklch.30}" }, },
    400: { value: { base: "${textL.oklch.40}", _dark: "${textD.oklch.40}" }, },
    500: { value: { base: "${textL.oklch.50}", _dark: "${textD.oklch.50}" }, },
    600: { value: { base: "${textL.oklch.60}", _dark: "${textD.oklch.60}" }, },
    700: { value: { base: "${textL.oklch.70}", _dark: "${textD.oklch.70}" }, },
    800: { value: { base: "${textL.oklch.80}", _dark: "${textD.oklch.80}" }, },
    900: { value: { base: "${textL.oklch.90}", _dark: "${textD.oklch.90}" }, },
    950: { value: { base: "${textL.oklch.95}", _dark: "${textD.oklch.95}" }, },
  },
  bg: {
    DEFAULT: { value: { base: "${bgL.oklch}", _dark: "${bgD.oklch}" } },
    50: { value: { base: "${bgL.oklch.5}", _dark: "${bgD.oklch.5}" }, },
    100: { value: { base: "${bgL.oklch.10}", _dark: "${bgD.oklch.10}" }, },
    200: { value: { base: "${bgL.oklch.20}", _dark: "${bgD.oklch.20}" }, },
    300: { value: { base: "${bgL.oklch.30}", _dark: "${bgD.oklch.30}" }, },
    400: { value: { base: "${bgL.oklch.40}", _dark: "${bgD.oklch.40}" }, },
    500: { value: { base: "${bgL.oklch.50}", _dark: "${bgD.oklch.50}" }, },
    600: { value: { base: "${bgL.oklch.60}", _dark: "${bgD.oklch.60}" }, },
    700: { value: { base: "${bgL.oklch.70}", _dark: "${bgD.oklch.70}" }, },
    800: { value: { base: "${bgL.oklch.80}", _dark: "${bgD.oklch.80}" }, },
    900: { value: { base: "${bgL.oklch.90}", _dark: "${bgD.oklch.90}" }, },
    950: { value: { base: "${bgL.oklch.95}", _dark: "${bgD.oklch.95}" }, },
  },
  primary: {
    DEFAULT: { value: { base: "${primaryL.oklch}", _dark: "${primaryD.oklch}" } },
    50: { value: { base: "${primaryL.oklch.5}", _dark: "${primaryD.oklch.5}" }, },
    100: { value: { base: "${primaryL.oklch.10}", _dark: "${primaryD.oklch.10}" }, },
    200: { value: { base: "${primaryL.oklch.20}", _dark: "${primaryD.oklch.20}" }, },
    300: { value: { base: "${primaryL.oklch.30}", _dark: "${primaryD.oklch.30}" }, },
    400: { value: { base: "${primaryL.oklch.40}", _dark: "${primaryD.oklch.40}" }, },
    500: { value: { base: "${primaryL.oklch.50}", _dark: "${primaryD.oklch.50}" }, },
    600: { value: { base: "${primaryL.oklch.60}", _dark: "${primaryD.oklch.60}" }, },
    700: { value: { base: "${primaryL.oklch.70}", _dark: "${primaryD.oklch.70}" }, },
    800: { value: { base: "${primaryL.oklch.80}", _dark: "${primaryD.oklch.80}" }, },
    900: { value: { base: "${primaryL.oklch.90}", _dark: "${primaryD.oklch.90}" }, },
    950: { value: { base: "${primaryL.oklch.95}", _dark: "${primaryD.oklch.95}" }, },
  },
  secondary: {
    DEFAULT: { value: { base: "${secondaryL.oklch}", _dark: "${secondaryD.oklch}" } },
    50: { value: { base: "${secondaryL.oklch.5}", _dark: "${secondaryD.oklch.5}" }, },
    100: { value: { base: "${secondaryL.oklch.10}", _dark: "${secondaryD.oklch.10}" }, },
    200: { value: { base: "${secondaryL.oklch.20}", _dark: "${secondaryD.oklch.20}" }, },
    300: { value: { base: "${secondaryL.oklch.30}", _dark: "${secondaryD.oklch.30}" }, },
    400: { value: { base: "${secondaryL.oklch.40}", _dark: "${secondaryD.oklch.40}" }, },
    500: { value: { base: "${secondaryL.oklch.50}", _dark: "${secondaryD.oklch.50}" }, },
    600: { value: { base: "${secondaryL.oklch.60}", _dark: "${secondaryD.oklch.60}" }, },
    700: { value: { base: "${secondaryL.oklch.70}", _dark: "${secondaryD.oklch.70}" }, },
    800: { value: { base: "${secondaryL.oklch.80}", _dark: "${secondaryD.oklch.80}" }, },
    900: { value: { base: "${secondaryL.oklch.90}", _dark: "${secondaryD.oklch.90}" }, },
    950: { value: { base: "${secondaryL.oklch.95}", _dark: "${secondaryD.oklch.95}" }, },
  },
  accent: {
    DEFAULT: { value: { base: "${accentL.oklch}", _dark: "${accentD.oklch}" } },
    50: { value: { base: "${accentL.oklch.5}", _dark: "${accentD.oklch.5}" }, },
    100: { value: { base: "${accentL.oklch.10}", _dark: "${accentD.oklch.10}" }, },
    200: { value: { base: "${accentL.oklch.20}", _dark: "${accentD.oklch.20}" }, },
    300: { value: { base: "${accentL.oklch.30}", _dark: "${accentD.oklch.30}" }, },
    400: { value: { base: "${accentL.oklch.40}", _dark: "${accentD.oklch.40}" }, },
    500: { value: { base: "${accentL.oklch.50}", _dark: "${accentD.oklch.50}" }, },
    600: { value: { base: "${accentL.oklch.60}", _dark: "${accentD.oklch.60}" }, },
    700: { value: { base: "${accentL.oklch.70}", _dark: "${accentD.oklch.70}" }, },
    800: { value: { base: "${accentL.oklch.80}", _dark: "${accentD.oklch.80}" }, },
    900: { value: { base: "${accentL.oklch.90}", _dark: "${accentD.oklch.90}" }, },
    950: { value: { base: "${accentL.oklch.95}", _dark: "${accentD.oklch.95}" }, },
  },
})
```
