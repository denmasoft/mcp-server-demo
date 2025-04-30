import { z } from 'zod';
import { fetchData } from '../../lib/api';
import { CatalogueSearchToolType } from '../types/cataloguesearch.tool.type';

export const catalogueSearchTool: CatalogueSearchToolType = [
  "catalogue_search",
  z.object({ q: z.string() }),
  async ({ q }) => {
    const response = await fetchData(q);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "I couldn't find matching products in the catalogue with that criteria."
          }
        ]
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
];
