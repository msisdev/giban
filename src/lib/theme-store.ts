import { atom } from "nanostores"

type Themes = "light" | "dark"

const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? "dark"
  : "light";

export const $theme = atom<Themes>(systemPreference)

export function switchTheme() {
  const newTheme = $theme.get() === "dark"
    ? "light"
    : "dark"
  $theme.set(newTheme)
}
