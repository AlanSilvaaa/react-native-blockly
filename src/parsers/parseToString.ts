import type { Block, Toolbox, Workspace } from '../types/blockly-types';
import type { ButtonConfig } from '../types/blockly-view-types';
import type { CSSProperties } from 'react';

/**
 * Parses the blocks array to a string representation.
 *
 * If the block has a 'code' property, it uses that as the code generation logic.
 * Otherwise, it defaults to returning a function call with the block type name.
 * e.g. for a block of type 'moveForward', it will generate code: `return 'moveForward()\n'`; if
 * no code property is provided.
 *
 * @param blocks - array of Block objects
 * @returns a string representation of the blocks in JSON format
 */
export function parseBlocksToString(blocks: Block[]): string {
  let htmlString = '';
  blocks.forEach((block: Block) => {
    htmlString += `
      Blockly.defineBlocksWithJsonArray([
        {
          "type": "${block.type}",
          "message0": "${block.message0}",
          "colour": ${block.colour || 230},
          "tooltip": "${block.tooltip || 'No tooltip'}",
          "previousStatement": null,
          "nextStatement": null,
          "helpUrl": ""
        }
      ]);

      javascript.javascriptGenerator.forBlock['${block.type}'] = function (block) {
        ${block.code ? block.code : `return '${block.type}()\\n'`};
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

/**
 * Parses the workspace object to a string representation.
 *
 * @param workspace - workspace object
 * @returns a string representation of the workspace in JSON format
 */
export function parseWorkspaceToString(workspace: Workspace): string {
  return JSON.stringify(workspace);
}

/**
 * Converts a CSSProperties object to an inline style string
 *
 * @param styles CSS properties object
 * @returns inline style string
 */
export function cssObjectToString(styles: CSSProperties): string {
  return Object.entries(styles)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${kebabKey}: ${value}`;
    })
    .join('; ');
}

/**
 * Parses the button configuration to string representation.
 *
 * @param buttonConfig - button configuration object
 * @returns an object with text and style as strings
 */
export function parseButtonConfigToString(buttonConfig: ButtonConfig): {
  text: string;
  style: string;
} {
  const text = buttonConfig?.text ?? '';
  const style = buttonConfig?.style
    ? cssObjectToString(buttonConfig.style)
    : '';

  return { text, style };
}
