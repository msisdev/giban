// https://docs.astro.build/en/reference/modules/astro-content/#definecollection

import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const blogSchema = z.object({
	title: 				z.string(),
	description:	z.string().optional(),
	date: 				z.date(),
	tags: 				z.array(z.string()),
	publish: 			z.boolean(),
})

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.mdoc",
		base: "./src/content/blogs",
	}),
	schema: () => blogSchema,
})

const workSchema = z.object({
	title: 				z.string(),
	description:	z.string(),
	tags: 				z.array(z.string()),
	date: 				z.date().optional(),
	start: 				z.date(),
	end: 					z.date().optional(),
	publish: 			z.boolean(),
})

const work = defineCollection({
	loader: glob({
		pattern: "**/*.mdoc",
		base: "./src/content/works",
	}),
	schema: () => workSchema,
})

export const collections = { blog, work }
