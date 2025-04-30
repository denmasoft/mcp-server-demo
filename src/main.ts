import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { catalogueSearchTool } from "./tools/impl/catalogue.search.tool";

const server = new McpServer({
  name: "MCP Server Demo",
  version: "1.0.0"
});

server.tool(
  catalogueSearchTool[0],
  catalogueSearchTool[1].shape,
  catalogueSearchTool[2]
);

const transport = new StdioServerTransport();
await server.connect(transport);
