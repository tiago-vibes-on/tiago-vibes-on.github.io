import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({
        base: "./src/content/projects",
        pattern: "**/*.md"
    }),
    schema: z.object({
        order: z.number().int().positive(),
        title: z.string(),
        description: z.string(),
        series: z.string(),
        stack: z.array(z.string()),
        repository: z.string().url(),
        status: z.enum(["published", "in progress"]),
        video: z.string().url().optional()
    })
});

export const collections = { projects };
