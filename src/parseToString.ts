import type { Block, Toolbox } from "./types";

/**
 * Parses the blocks array to a string representation.
 * 
 * @param blocks - array of Block objects
 * @returns a string representation of the blocks in JSON format
 */
export function parseBlocksToString(blocks: Block[]): string {
    let htmlString = "";
    blocks.forEach((block: Block) => {
        htmlString += `
      Blockly.defineBlocksWithJsonArray([
        {
          "type": "${block.type}",
          "message0": "${block.message0}",
          "colour": ${block.colour || 230},
          "tooltip": "${block.tooltip || "No tooltip"}",
          "previousStatement": null,
          "nextStatement": null,
          "helpUrl": ""
        }
      ]);

      javascript.javascriptGenerator.forBlock['${block.type}'] = function (block) {
        return '${block.type}()\\n';
      };
    `;
    });
    return htmlString;
}

/**
 * Parses the toolbox object to a string representation.
 * 
 * @param toolbox - toolbox object
 * @returns a string representation of the toolbox in JSON format
 */
export function parseToolboxToString(toolbox: Toolbox): string {
    return JSON.stringify(toolbox);
}