import type { CollectionEntry, CollectionKey } from "astro:content"

const policy = {
  wordsPerMinute: 150,
  wordRx: /\w+/g
}

export function getReadingTime<T extends CollectionKey>(entry: CollectionEntry<T>) {
  let wordCount = 0
  wordCount = entry.body
    ? entry.body.match(policy.wordRx)?.length ?? 0
    : 0
  wordCount += entry.data.description
    ? entry.data.description?.match(policy.wordRx)?.length ?? 0
    : 0

  const time = wordCount
    ? Math.ceil(wordCount / policy.wordsPerMinute)
    : 0

  return time
}
