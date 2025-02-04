# cf-astro-mdoc-blog

Unstyled [AstroJS](https://astro.build/) blog starter for [Markdoc](https://markdoc.dev/)

Demo on [Stackblitz](https://stackblitz.com/edit/github-xkgjrrr4)

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)

## Overview
```
src
├── assets
├── components
│   └── mdoc
│       ├── Callout.astro ......... custom `callout` tag component
│       ├── Figure.astro .......... custom `figure` tag component
│       └── Image.astro ........... custom `![]()` node component
├── content
│   ├── blog ...................... category feature
│   │   └── markdoc-syntax.mdoc ... mdoc file
│   └── life
│       └── hello-world.mdoc
├── content.config.ts ............. custom collection definition
├── layouts
│   └── BaseLayout.astro
├── lib
│   └── getImgSrc.ts .............. impl. of cloudflare images transform URL
├── mdoc
│   ├── nodes
│   │   ├── image.mdoc.ts ......... `![]()` node render option
│   │   └── index.ts
│   └── tags
│       ├── callout.mdoc.ts ....... `callout` tag render option
│       ├── figure.mdoc.ts ........ `figure` tag render option
│       └── index.ts
└── pages
    ├── 404.astro
    ├── index.astro ............... list collection
    └── life
        └── [...slug].astro ....... render content
```



## Features

### Markdoc

#### Collection API
Related files:
- mdoc file: `src/content/life/hello-world.mdoc`
- collection generator: `src/content/config.ts`
- list collection: `src/pages/index.astro`
- render mdoc file: `src/pages/life/[...slug].astro`\

#### Markdoc Custom Component
Related folders:
- components: `src/components/mdoc`
- tag config: `src/mdoc/tags`
- node config: `src/mdoc/nodes`

### Image Optimization
I failed to use [built-in optimization](https://docs.astro.build/en/guides/integrations-guide/markdoc/#custom-image-components).
Instead, I used [Cloudflare Images Transform](https://developers.cloudflare.com/images/transform-images/transform-via-url/).
```astro
// src/components/mdoc/Image.astro
---
interface Props {
  src: string
  alt: string
}
const { src, alt } = Astro.props
const { env } = Astro.locals.runtime

function getSrc() {
  switch (env.WHICH_ENV) {
    case "development":
      return src

    case "preview":
    case "production":
    default:
      return `/cdn-cgi/image/quality=75` + src
  }
}
---

<img src={getSrc()} alt={alt} />
```

## Resources
https://github.com/withastro/astro/issues/5711#issuecomment-1848331875
- When you encounter compile error on `astro:content`

https://rodneylab.com/astro-markdoc/
- Astro markdoc for blog

https://github.com/ymcheung/build-ui
- Astro markdoc configs

https://trungvose.com/blog/error-9421-too-many-redirects-with-cloudflare-images/
- Cloudflare Images troubleshoot

https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EC%84%A0%ED%98%95-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%B4-%EC%B8%A1%EB%A9%B4%EC%97%90-%EB%A7%A4%EB%8B%AC%EB%A0%A4-%EC%9E%88%EB%8A%94-%ED%9D%B0%EC%83%89-%EC%A1%B0%EA%B0%81%ED%92%88-lAG5K1x-36A
- Demo image
