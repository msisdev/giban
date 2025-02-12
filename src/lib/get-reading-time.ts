import type { CollectionEntry, CollectionKey } from "astro:content"

const config = {
  wordsPerMinute: 150,
  wordRx: /\w+/g
}

export function getReadingTime<T extends CollectionKey>(entry: CollectionEntry<T>) {
  let wordCount = 0

  // count from body
  wordCount = entry.body
    ? entry.body.match(config.wordRx)?.length ?? 0
    : 0

  // count from description
  wordCount += entry.data.description
    ? entry.data.description?.match(config.wordRx)?.length ?? 0
    : 0

  // calc time
  const time = wordCount
    ? Math.ceil(wordCount / config.wordsPerMinute)
    : 0

  return time
}
