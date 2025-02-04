# giban

An unstyled AstroJS blog starter

> giban (Korean): A foundation, or the foundation of a thing

## Quick Start
```
$ npm create cloudflare@latest

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
├ Cloning template from: msisdev/my-portfolio-v4#preview
│
...

```

Choose template by branch name:
- `msisdev/giban`: unstyled html
- ~~`msisdev/giban#styled`: styled template~~ wip

If you get error `Cannot find module 'astro:content' or its corresponding type declarations`
- `$ npx astro sync`
