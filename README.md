# giban

Minimal AstroJS blog starter

> giban (기반): Korean word - a foundation, or the foundation of a thing

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)



## Quick Start
## Without cloudflare
```
$ bun create astro --template msisdev/giban
```

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
│ repository msisdev/giban#cloudflare
│
├ Cloning template from: msisdev/giban#cloudflare
│
...
```

### Troubleshoot

If you get error `Cannot find module 'astro:content' or its corresponding type declarations`
- `$ npx astro sync`



## Features
- Markdoc
- Table of content
- Reading time
- Search by [pagefind](https://pagefind.app/)
- Image optimization by [Cloudflare Images](https://developers.cloudflare.com/images/transform-images/transform-via-url/)



## Why should I use this?
[AstroJS](https://astro.build/)
- Simple and powerful

[Markdoc](https://markdoc.dev/)
- Progressively add components

[PandaCSS](https://panda-css.com/)
- Customize styles

### vs Digital Garden
This project is not like Digital Garden.  
But you can create/edit files in Github Mobile app.  
I think that's enough for most use cases.



## Resources

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

