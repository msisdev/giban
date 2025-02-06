// https://docs.astro.build/en/reference/modules/astro-content/#astrocontent-types

import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const schema = z.object({
	title: z.string(),
	description: z.string().optional(),
	date: z.date(),
	tags: z.array(z.string()),
	publish: z.boolean(),
})

const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
	schema: () => schema,
})

const life = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/life" }),
	schema: () => schema,
})

const note = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/note" }),
	schema: () => schema,
})

const all = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content" }),
	schema: () => schema,
})

export const collections = { all, blog, life, note }
