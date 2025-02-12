// just alphabetical
const paths = {
  home: "/",

  blogDetail: (id: string) => `/blogs/${id}`,

  posts: "/posts",

  search: "/search",

  tags: "/tags",
  tagPosts: (tag: string) => `/tags/${tag}`,
  
  works: "/works",
  workDetail: (id: string) => `/works/${id}`,
} as const

export default paths
