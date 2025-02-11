# [giban](https://giban.pages.dev/)

Minimal blog starter with AstroJS

> giban (Korean, 기반): a foundation, or the foundation of a thing

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)

## Overview
- [Quick Start](#quick-start)
  - [With cloudflare](#with-cloudflare)
  - [Without cloudflare](#without-cloudflare)
  - [Troubleshoot](#troubleshoot)
- [Features](#features)
  - [About comment system](#about-comment-system)
- [Why giban](#why-giban)
  - [AstroJS](#astrojs)
  - [MDX vs Markdoc](#mdx-vs-markdoc)
  - [vs Digital Garden](#vs-digital-garden)
- [Guides](#guides)
  - [How to change color set](#how-to-change-color-set)
  - [How to use icon](#how-to-use-icon)
- [Refs](#refs)



## Quick Start
### With cloudflare
```
$ bun create cloudflare@latest

╭ Create an application with Cloudflare Step 1 of 3
│
├ In which directory do you want to create your application?
│ dir ./my-blog
│
├ What would you like to start with?
│ category Template from a GitHub repo
│
├ What's the url of git repo containing the template you'd like to use?
│ repository msisdev/giban
│
├ Cloning template from: msisdev/giban
│
...
```

### Without cloudflare
1. `$ bun create astro --template msisdev/giban`
2. Remove cloudflare adapter
    ```js
    // astro.config.mjs
    export default defineConfig({
      // ↓ Remove this block ↓
      adapter: cloudflare({
        platformProxy: {
          enabled: true
        }
      }),
    })
    ```
3. `$bun rm @cloudflare/workers-types`

### Troubleshoot

If you get error `Cannot find module 'astro:content' or its corresponding type declarations`
- `$ bunx astro sync`





## Features
- Markdoc
- Common blog patterns
  - Table of content
  - Reading time
  - Search by [pagefind](https://pagefind.app/)
  - Image optimization by [Cloudflare Images](https://developers.cloudflare.com/images/transform-images/transform-via-url/)
- Style with PandaCSS
  - Dark mode switch

### About Comment system
I intentionally didn't add comment system because
1. it is not essential
2. it is easy to be added.

Checkout either [giscus](https://giscus.app) or [utterances](https://utteranc.es/).





## Why giban?
Or, why use giban stack?

### [AstroJS](https://astro.build/)
AstroJS is a new FrontEnd framework for JS.


### [MDX](https://mdxjs.com/) vs [Markdoc](https://markdoc.dev/)
MDX is like JSX.
```markdown
import Callout from '../components/Callout.astro'

I'm normal markdown line.

<Callout type="check">
  I'm callout component
</Callout>
```

While Markdoc is like expressive markdown.
```markdoc
I'm normal markdown line.

{% callout type="check" %}
  I'm callout component
{% /callout %}
```

But you should aware that [@astrojs/markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/) integration is in experimental stage.

### [PandaCSS](https://panda-css.com/)
PandaCSS is a zero runtime CSS-in-JS that generates static css files at build stage.
PandaCSS uses helper function to gerate class string. This lets your html remain simple.  

Writing styles in PandaCSS is like:
```astro
---
// Footer.astro
import urls from "@/config/urls"
import { Icon } from "astro-icon/components"
import { css } from "styled-system/css"

const root = css({
  padding: 4,
})

const root__line1 = css({
  display: "flex",
  alignItems: "center",
  gap: 4,
  
  "& a": {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
})
---
<footer class={root}>
  <p class={root__line1}>
    &copy;2025 by msisdev All rights reserved.
    <a href={urls.github} aria-label="Github repository">
      <Icon name="iconoir:github" /> Github
    </a>
  </p>
  
</footer>
```

### vs Obsidian Digital Garden
You may find [Digital Garden](https://dg-docs.ole.dev/) is more useful, if you want to use Obsidian.

But you don't need Digital Garden if-
- you find Digital Garden stack is too much for your blog.
- you don't need Obsidian.
  - With help of Github Mobile app, you can create/edit files anywhere.



## Guides

### How to change color set
You can use [Realtime Colors](https://www.realtimecolors.com/) to automate this.
Follow this [guide](https://github.com/msisdev/giban/tree/master/panda/tokens/colors)

### How to use icon
This project is using [Astro Icon](https://www.astroicon.dev/).

Astro Icon supports [Iconify](https://iconify.design/).
Currently [iconoir](https://icon-sets.iconify.design/iconoir/?keyword=iconoi) is installed. To replace this, follow this [guide](https://www.astroicon.dev/guides/customization/#open-source-icon-sets).



## Refs

[AstroJS discussion](https://github.com/withastro/astro/issues/5711#issuecomment-1848331875)
- When you encounter compile error on `astro:content`

[Rodney](https://rodneylab.com/astro-markdoc/)
- Astro markdoc for blog

[ymcheung](https://github.com/ymcheung/build-ui)
- Astro markdoc configs

[Trung Vo](https://trungvose.com/blog/error-9421-too-many-redirects-with-cloudflare-images/)
- Cloudflare Images troubleshoot

[bharath kumar](https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EC%84%A0%ED%98%95-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%B4-%EC%B8%A1%EB%A9%B4%EC%97%90-%EB%A7%A4%EB%8B%AC%EB%A0%A4-%EC%9E%88%EB%8A%94-%ED%9D%B0%EC%83%89-%EC%A1%B0%EA%B0%81%ED%92%88-lAG5K1x-36A)
- Demo image

[Anca I/O](https://www.anca.io/posts/adding-necessary-features-in-the-astro-markdoc-blog/#add-the-reading-time-to-your-postpage)
- reading time

[shishkin](https://github.com/shishkin/astro-pagefind)
- astro-pagefind

[Thomas Ledoux](https://www.thomasledoux.be/blog/search-static-astro-website)
- how to use pagefind

[Realtime Colors](https://www.realtimecolors.com/)
- Automate color change

[astro-icon](https://github.com/natemoo-re/astro-icon)
- Iconify usage
