const paths = {
  home: "/",
  blogDetail: (id: string) => `/blogs/${id}`,
  posts: "/posts",
  projects: "/projects",
  search: "/search",
  tags: "/tags",
  tagPosts: (tag: string) => `/tags/${tag}`,
}

export default paths
