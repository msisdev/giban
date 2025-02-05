const paths = {
  home: "/",
  all: "/all",
  blog: "/blog",
  life: "/life",
  note: "/note",
  projects: "/projects",
  search: "/search",
  tags: "/tags",
  tagPosts: (tag: string) => `/tags/${tag}`,
}

export default paths