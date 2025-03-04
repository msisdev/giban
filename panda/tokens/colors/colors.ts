import { defineSemanticTokens } from "@pandacss/dev"

export const colors = defineSemanticTokens.colors({
  text: {
    DEFAULT: { value: { base: "oklch(17.60% 0.009 169.10)", _dark: "oklch(95.68% 0.006 170.45)" } },
    50: { value: { base: "oklch(96.38% 0.004 179.73)", _dark: "oklch(16.31% 0.008 163.85)" }, },
    100: { value: { base: "oklch(92.91% 0.011 167.79)", _dark: "oklch(22.46% 0.015 166.08)" }, },
    200: { value: { base: "oklch(85.61% 0.019 171.42)", _dark: "oklch(33.61% 0.023 169.88)" }, },
    300: { value: { base: "oklch(78.29% 0.031 169.46)", _dark: "oklch(44.04% 0.034 168.15)" }, },
    400: { value: { base: "oklch(70.70% 0.040 168.54)", _dark: "oklch(53.71% 0.042 167.79)" }, },
    500: { value: { base: "oklch(63.16% 0.051 168.59)", _dark: "oklch(63.16% 0.051 168.59)" }, },
    600: { value: { base: "oklch(53.71% 0.042 167.79)", _dark: "oklch(70.70% 0.040 168.54)" }, },
    700: { value: { base: "oklch(44.04% 0.034 168.15)", _dark: "oklch(78.29% 0.031 169.46)" }, },
    800: { value: { base: "oklch(33.61% 0.023 169.88)", _dark: "oklch(85.61% 0.019 171.42)" }, },
    900: { value: { base: "oklch(22.46% 0.015 166.08)", _dark: "oklch(92.91% 0.011 167.79)" }, },
    950: { value: { base: "oklch(16.31% 0.008 163.85)", _dark: "oklch(96.38% 0.004 179.73)" }, },
  },
  bg: {
    DEFAULT: { value: { base: "oklch(95.00% 0.007 174.37)", _dark: "oklch(18.86% 0.010 172.93)" } },
    50: { value: { base: "oklch(96.38% 0.004 179.73)", _dark: "oklch(16.31% 0.008 163.85)" }, },
    100: { value: { base: "oklch(92.94% 0.010 174.26)", _dark: "oklch(22.50% 0.014 172.58)" }, },
    200: { value: { base: "oklch(85.77% 0.021 173.85)", _dark: "oklch(33.85% 0.026 172.15)" }, },
    300: { value: { base: "oklch(78.49% 0.032 173.35)", _dark: "oklch(44.30% 0.036 171.97)" }, },
    400: { value: { base: "oklch(70.94% 0.041 173.40)", _dark: "oklch(53.98% 0.043 172.63)" }, },
    500: { value: { base: "oklch(63.42% 0.052 172.41)", _dark: "oklch(63.42% 0.052 172.41)" }, },
    600: { value: { base: "oklch(53.98% 0.043 172.63)", _dark: "oklch(70.94% 0.041 173.40)" }, },
    700: { value: { base: "oklch(44.30% 0.036 171.97)", _dark: "oklch(78.49% 0.032 173.35)" }, },
    800: { value: { base: "oklch(33.85% 0.026 172.15)", _dark: "oklch(85.77% 0.021 173.85)" }, },
    900: { value: { base: "oklch(22.50% 0.014 172.58)", _dark: "oklch(92.94% 0.010 174.26)" }, },
    950: { value: { base: "oklch(16.31% 0.008 163.85)", _dark: "oklch(96.38% 0.004 179.73)" }, },
  },
  primary: {
    DEFAULT: { value: { base: "oklch(40.26% 0.031 173.92)", _dark: "oklch(81.35% 0.027 175.39)" } },
    50: { value: { base: "oklch(96.38% 0.004 179.73)", _dark: "oklch(16.36% 0.007 178.64)" }, },
    100: { value: { base: "oklch(92.94% 0.010 174.26)", _dark: "oklch(22.50% 0.014 172.58)" }, },
    200: { value: { base: "oklch(85.77% 0.021 173.85)", _dark: "oklch(33.85% 0.026 172.15)" }, },
    300: { value: { base: "oklch(78.52% 0.031 175.68)", _dark: "oklch(44.33% 0.035 174.34)" }, },
    400: { value: { base: "oklch(70.97% 0.040 175.28)", _dark: "oklch(54.01% 0.042 174.52)" }, },
    500: { value: { base: "oklch(63.45% 0.051 173.90)", _dark: "oklch(63.45% 0.051 173.90)" }, },
    600: { value: { base: "oklch(54.01% 0.042 174.52)", _dark: "oklch(70.97% 0.040 175.28)" }, },
    700: { value: { base: "oklch(44.33% 0.035 174.34)", _dark: "oklch(78.52% 0.031 175.68)" }, },
    800: { value: { base: "oklch(33.85% 0.026 172.15)", _dark: "oklch(85.77% 0.021 173.85)" }, },
    900: { value: { base: "oklch(22.50% 0.014 172.58)", _dark: "oklch(92.94% 0.010 174.26)" }, },
    950: { value: { base: "oklch(16.36% 0.007 178.64)", _dark: "oklch(96.38% 0.004 179.73)" }, },
  },
  secondary: {
    DEFAULT: { value: { base: "oklch(74.02% 0.029 265.39)", _dark: "oklch(40.88% 0.034 265.05)" } },
    50: { value: { base: "oklch(95.85% 0.005 274.96)", _dark: "oklch(15.35% 0.007 258.40)" }, },
    100: { value: { base: "oklch(91.83% 0.009 264.52)", _dark: "oklch(20.86% 0.013 264.25)" }, },
    200: { value: { base: "oklch(83.49% 0.018 264.47)", _dark: "oklch(30.86% 0.023 264.15)" }, },
    300: { value: { base: "oklch(74.74% 0.029 267.45)", _dark: "oklch(39.85% 0.034 267.01)" }, },
    400: { value: { base: "oklch(65.97% 0.039 266.53)", _dark: "oklch(48.59% 0.043 266.27)" }, },
    500: { value: { base: "oklch(56.95% 0.051 265.82)", _dark: "oklch(56.95% 0.051 265.82)" }, },
    600: { value: { base: "oklch(48.59% 0.043 266.27)", _dark: "oklch(65.97% 0.039 266.53)" }, },
    700: { value: { base: "oklch(39.85% 0.034 267.01)", _dark: "oklch(74.74% 0.029 267.45)" }, },
    800: { value: { base: "oklch(30.86% 0.023 264.15)", _dark: "oklch(83.49% 0.018 264.47)" }, },
    900: { value: { base: "oklch(20.86% 0.013 264.25)", _dark: "oklch(91.83% 0.009 264.52)" }, },
    950: { value: { base: "oklch(15.35% 0.007 258.40)", _dark: "oklch(95.85% 0.005 274.96)" }, },
  },
  accent: {
    DEFAULT: { value: { base: "oklch(47.71% 0.061 285.05)", _dark: "oklch(61.81% 0.057 285.81)" } },
    50: { value: { base: "oklch(95.66% 0.007 286.27)", _dark: "oklch(14.85% 0.011 294.20)" }, },
    100: { value: { base: "oklch(91.24% 0.012 286.16)", _dark: "oklch(20.01% 0.018 284.67)" }, },
    200: { value: { base: "oklch(82.27% 0.025 285.84)", _dark: "oklch(29.32% 0.033 284.21)" }, },
    300: { value: { base: "oklch(73.17% 0.039 287.10)", _dark: "oklch(38.04% 0.046 285.70)" }, },
    400: { value: { base: "oklch(63.72% 0.054 286.04)", _dark: "oklch(46.18% 0.058 285.16)" }, },
    500: { value: { base: "oklch(53.98% 0.070 284.82)", _dark: "oklch(53.98% 0.070 284.82)" }, },
    600: { value: { base: "oklch(46.18% 0.058 285.16)", _dark: "oklch(63.72% 0.054 286.04)" }, },
    700: { value: { base: "oklch(38.04% 0.046 285.70)", _dark: "oklch(73.17% 0.039 287.10)" }, },
    800: { value: { base: "oklch(29.32% 0.033 284.21)", _dark: "oklch(82.27% 0.025 285.84)" }, },
    900: { value: { base: "oklch(20.01% 0.018 284.67)", _dark: "oklch(91.24% 0.012 286.16)" }, },
    950: { value: { base: "oklch(14.85% 0.011 294.20)", _dark: "oklch(95.66% 0.007 286.27)" }, },
  },
})