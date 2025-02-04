// https://docs.astro.build/en/reference/modules/astro-content/#astrocontent-types

import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const life = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/life" }),
	schema: () => z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
})

const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
	schema: () => z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
})

const all = defineCollection({
	loader: glob({ pattern: "**/*.mdoc", base: "./src/content" }),
	schema: () => z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
})

export const collections = { all, life, blog }
