export default function getImgSrc(env: Env, src: string) {
  switch (env.WHICH_ENV) {
    case "development":
      return src

    case "preview":
    case "production":
    default:
      return `/cdn-cgi/image/quality=75` + src
  }
}
