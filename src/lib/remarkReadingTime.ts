// https://docs.astro.build/en/recipes/reading-time/
import type { RemarkPlugin } from "@astrojs/markdown-remark"
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkReadingTime: RemarkPlugin<[]> = () => (tree, { data }) => {
  const textOnPage = toString(tree);
  const readingTime = getReadingTime(textOnPage);
  // readingTime.text will give us minutes read as a friendly string,
  // i.e. "3 min read"
  console.log({ textOnPage, readingTime })
  if (data.astro && data.astro.frontmatter) {
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}
