import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "MCP Server Demo",
  version: "1.0.0"
});

server.tool(
  "catalogue-search",
  { q: z.string() },
  async ({ q }) => {
    const catalogueSearchResponse = await fetch(`https://api?search=${q}`);
    const catalogueSearch = await catalogueSearchResponse.json();
    if (catalogueSearch.length === 0) {
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
          text: JSON.stringify(catalogueSearch) 
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
