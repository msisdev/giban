// just alphabetical
const paths = {
  home: "/",

  blogDetail: (id: string) => `/blogs/${id}`,

  posts: "/posts",
  postPages: (page: number) => `/posts/${page <= 1 ? "" : page}`,

  search: "/search",

  tags: "/tags",
  tagPosts: (tag: string) => `/tags/${tag}`,
  
  works: "/works",
  workDetail: (id: string) => `/works/${id}`,
} as const

export default paths
