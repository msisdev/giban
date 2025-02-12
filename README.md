# [giban](https://giban.pages.dev/)

> giban (Korean, 기반): a foundation, or the foundation of a thing

giban is a minimal, fully functional blog. It has minimal style and CSS-in-JS boilerplates. Start building your own style from this theme or swap color set and ready to go.





## Overview
- [Quick Start](#quick-start)
  - [With cloudflare](#with-cloudflare)
  - [Without cloudflare](#without-cloudflare)
  - [Troubleshoot](#troubleshoot)
- [Introduction](#introduction)
  - [Who can use this](#who-can-use-this)
  - [Stack](#stack)
  - [Features](#features)
  - [Why giban](#why-giban)
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
4. Remove/edit cloudflare specific codes
  1. Search codes by `CLOUDFLARE_ONLY` keyword
  2. Edit codes

### Troubleshoot

If you get error `Cannot find module 'astro:content' or its corresponding type declarations`
- `$ bunx astro sync`





## Introduction
> giban (Korean, 기반): a foundation, or the foundation of a thing

giban is a minimal, fully functional blog. It has minimal style and CSS-in-JS boilerplates.  
Start building your own style from this theme. Or swap color set and ready to go.

### Who can use this?
Bloggers: swap color set and ready to go  
CSS beginners:  launch blog and develop style progressively  
CSS pros: save time by skipping tokens & scripts  
Developers: just explore patterns and implementations in AstroJS  

### Stack
[AstroJS](https://astro.build/)
[Markdoc](https://markdoc.dev/)
[Pagefind](https://pagefind.app/)
[PandaCSS](https://panda-css.com/)
[Iconify](https://iconify.design/)

### Features
Common blog patterns
- Table of content
- Reading time
- Search by [pagefind](https://pagefind.app/)
- Image optimization by [Cloudflare Images](https://developers.cloudflare.com/images/transform-images/transform-via-url/)
- Dark mode switch

Styling kit
- Instant color swap (read the github guide)
- PandaCSS boilerplates
- Icon by Iconify

I didn't add comment system because it is not minimal and easy to be added. Checkout discus or utterances.

Checkout either [giscus](https://giscus.app) or [utterances](https://utteranc.es).





## Why giban?

### [AstroJS](https://astro.build/)
AstroJS is a new FrontEnd framework contender of JS.
- [Meta-framework](https://docs.astro.build/en/guides/integrations-guide/)
- Built-in [SSG](https://docs.astro.build/en/guides/routing/#static-ssg-mode) support
- Best performance by [Server island](https://astro.build/blog/future-of-astro-server-islands/)

### [MDX](https://mdxjs.com/) vs [Markdoc](https://markdoc.dev/)
MDX is like JSX.
```markdown
import Callout from '../components/Callout.astro'

I'm normal markdown line.

<Callout type="check">
  I'm custom component
</Callout>
```

While Markdoc is like expressive markdown.
```markdoc
I'm normal markdown line.

{% callout type="check" %}
  I'm custom component
{% /callout %}
```

But you should aware that [@astrojs/markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/) integration is in experimental stage.

### [PandaCSS](https://panda-css.com/)
PandaCSS is a [zero runtime CSS-in-JS](https://panda-css.com/docs/overview/why-panda#the-new-era-of-css-in-js) that generates static css files at build stage.  
PandaCSS uses [helper function](https://panda-css.com/docs/concepts/writing-styles) to write styles fast.

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
You may find [Obsidian Digital Garden](https://dg-docs.ole.dev/) is more useful, if you like Obsidian.

But you don't need Digital Garden if-
- you want to keep things simple.
- you don't need Obsidian.
  - With help of Github Mobile app, you can create/edit files anywhere.





## Guides

### How to change color set
You can change colors instantly by using [Realtime Colors](https://www.realtimecolors.com/).  
Please follow this [guide](https://github.com/msisdev/giban/tree/master/panda/tokens/colors).

### How to use icon
This project is using [Astro Icon](https://www.astroicon.dev/) and [Iconify](https://iconify.design/).  
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
