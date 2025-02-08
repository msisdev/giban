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
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blogs" }),
	schema: () => schema,
})

const all = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content" }),
	schema: () => schema,
})

export const collections = { all, blog }
