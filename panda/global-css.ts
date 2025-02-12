import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  "*": {
    boxSizing: "border-box",
  },

  "*::selection": {
    background: "accent",
    color: "text.50",
  },
  "*::moz-selection": {
    background: "accent",
    color: "text.50",
  },
  "*::webkit-selection": {
    background: "accent",
    color: "text.50",
  },

  "html, body": {
    height: "fit-content",    // apply dark theme on entire page
    minHeight: "100vh",       // push footer to bottom
    width: "full",            // in case you want to use screen-wide effect
    color: "text",
    backgroundColor: "bg",
    lineHeight: "1.5",
    fontFamily: "dodum",
    fontSize: "base",
  },

  "body": {
    display: "flex",          // to allow main to extend its height
    flexDirection: "column",
  },

  "header, main, footer": {
    width: "full",
    maxWidth: "6xl",
    marginLeft: "auto",
    marginRight: "auto",
    p: 4,
  },

  "main": { flex: "1" },

  "section": { mb: 8 },

  "h1, h2, h3, h4, h5, h6": {
    my: 8,
    fontWeight: "bold",
    // overflowWrap: "normal",
    wordBreak: "keep-all",
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
      textDecoration: "underline",
    },
  },

  "address, blockquote, dl, ol, p, pre, table, ul": {
    mb: 4,
  },
  
  "hr": { color: "primary" },

  /**
   * table
   */
  "table": {
    display: "block",
    w: "full",
    overflowX: "auto",
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
    textAlign: "left",
  },

  /**
   * pre, code
   */
  "pre": {
    p: 4,
    borderRadius: "box",
    width: "full",
    overflowX: "auto",
    fontSize: ".875rem",
    fontFamily: "fira",
    fontWeight: "lighter",
    lineHeight: "normal",
    letterSpacing: "normal",
    fontSmooth: "auto",
  },

  /**
   * article (currently used for content only)
   */
  "article": {
    "& p": {
      textIndent: "1",
    },
    "& ol": {
      listStyleType: "decimal",
    },
    "& ul": {
      listStyleType: "disc",
    },
    "& li": {
      ml: 4,
      mb: 1,
    },
  },
})
