import storages from "@/config/storages"
import { atom } from "nanostores"

type Themes = "light" | "dark"

const storagePreference = (() => {
  const v = window.sessionStorage.getItem(storages.colorMode)
  if (v === null || v === "light" || v === "dark") return v
  return null
})()

const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? "dark"
  : "light"

export const $theme = atom<Themes>(storagePreference ?? systemPreference)

export function switchTheme() {
  const newTheme = $theme.get() === "dark"
    ? "light"
    : "dark"
  $theme.set(newTheme)
  window.sessionStorage.setItem(storages.colorMode, newTheme)
}
