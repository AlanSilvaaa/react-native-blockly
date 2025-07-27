import type { Blockly } from "react-native-blockly";
import type { Block } from "./types";

export function parseToString(Blockly: Blockly): string {
    let htmlString = "";
    Blockly.getBlocks().forEach((block: Block) => {
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