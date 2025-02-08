# [giban](https://giban.pages.dev/)

Minimal blog starter with AstroJS

> giban (Korean, 기반): a foundation, or the foundation of a thing

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)



## Quick Start
### With Cloudflare
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
2. Edit `astro.config.mjs`
```js
export default defineConfig({
  // Rmove this block
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
- Table of content
- Reading time
- Search by [pagefind](https://pagefind.app/)
- Image optimization by [Cloudflare Images](https://developers.cloudflare.com/images/transform-images/transform-via-url/)
- Style with PandaCSS
- Dark mode switch



## Why should I use this stack?
[AstroJS](https://astro.build/): Simple and powerful

[Markdoc](https://markdoc.dev/): Progressively add components

[PandaCSS](https://panda-css.com/): Zero runtime CSS-in-JS

### MDX vs Markdoc
MDX is like JSX.
```
import Callout from '../components/Callout.astro'

I'm normal markdown line.

<Callout type="check">
  I'm callout component
</Callout>
```

While Markdoc is like expressive markdown.
```
I'm normal markdown line.

{% callout type="check" %}
  I'm callout component
{% /callout %}
```

But you should aware that [@astrojs/markdoc integration](https://docs.astro.build/en/guides/integrations-guide/markdoc/) is in experimental stage.

### vs Digital Garden
This project is not like Digital Garden.  
But you can create/edit files in Github Mobile app.



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
