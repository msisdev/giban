import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  "html, body": {
    height: "full",
    minHeight: "100vh",
    width: "full",
    display: "block",
    color: "text",
    backgroundColor: "bg",
    lineHeight: "1.5",
    fontFamily: "dodum",
  },

  "header, main, footer": {
    maxWidth: "9xl",
    marginLeft: "auto",
    marginRight: "auto",
    py: 4,
  },

  "section": {
    my: 4,
  },

  "h1": {
    fontSize: "5xl",
    lineHeight: "1",
  },

  "h2": {
    fontSize: "4xl",
    lineHeight: "1",
  },

  "h3": {
    fontSize: "3xl",
    lineHeight: "1",
  },
})
