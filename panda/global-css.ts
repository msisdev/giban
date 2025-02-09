import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  "html, body": {
    height: "fit-content",
    minHeight: "100vh",
    width: "full",
    color: "text",
    backgroundColor: "bg",
    lineHeight: "1.5",
    fontFamily: "dodum",
    fontSize: "base",
  },

  "body": {
    display: "flex",
    flexDirection: "column",
  },

  "header, main, footer": {
    width: "full",
    maxWidth: "6xl",
    marginLeft: "auto",
    marginRight: "auto",
    p: 4,
  },

  "main": {
    flex: "1",
  },

  "section": {
    mb: 8,
  },

  "h1, h2, h3, h4, h5, h6": {
    mb: 8,
    fontWeight: "bold",
  },

  "address, blockquote, dl, ol, p, pre, table, ul": {
    mb: 4,
  },

  "h1": {
    fontSize: "5xl",
    lineHeight: "5xl",
  },

  "h2": {
    fontSize: "4xl",
    lineHeight: "4xl",
  },

  "h3": {
    fontSize: "3xl",
    lineHeight: "3xl",
  },

  "h4": {
    fontSize: "2xl",
    lineHeight: "2xl",
  },

  "h5": {
    fontSize: "xl",
    lineHeight: "xl",
  },

  "h6": {
    fontSize: "lg",
    lineHeight: "lg",
  },

  "p": {
    fontSize: "base",
    lineHeight: "base",
  },

  "a, button": {
    color: "primary",
    position: "relative",
    _hover: {
      color: "primary.500"
    },
  },

  "hr": {
    color: "primary"
  },

  /**
   * Table
   */
  "table": {
    w: "full",
    overflow: "auto",
  },
  "thead": {
    fontWeight: "bold",
  },
  "tr": {
    borderBottom: "1px solid {colors.text.300}",
    lineHeight: 2,
  },
  "th, td": {
    p: 2,
  },
  "th": {
    textTransform: "uppercase",
  },
})
