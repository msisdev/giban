const paths = {
  home: "/",
  posts: "/posts",
  projects: "/projects",
  search: "/search",
  tags: "/tags",
  tagPosts: (tag: string) => `/tags/${tag}`,
}

export default paths