import { z } from 'zod';

const CatalogueSearchInputSchema = z.object({
  q: z.string().describe("The search query for the product catalogue."),
});

type CatalogueSearchOutputType = Promise<{
  content: Array<{ type: 'text', text: string }>;
}>;

export type CatalogueSearchToolType = [
  string,
  typeof CatalogueSearchInputSchema,
  (args: z.infer<typeof CatalogueSearchInputSchema>) => CatalogueSearchOutputType
];
