import type { Block, Toolbox, Workspace } from '../types/blockly-types';
import type { BlocklyStyles } from '../types/css';

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
 * Converts a CSS properties object to a CSS string
 * 
 * @param properties - CSS properties object
 * @returns CSS string representation
 */
function propertiesToCssString(properties: React.CSSProperties): string {
  return Object.entries(properties)
    .map(([key, value]) => {
      const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      return `${cssKey}: ${value};`;
    })
    .join('\n        ');
}

/**
 * Converts BlocklyStyles object to CSS string for injection into HTML
 * 
 * @param styles - BlocklyStyles configuration object
 * @returns CSS string ready to be injected into style tag
 */
export function stylesToCss(styles: BlocklyStyles): string {
  let css = '';

  if (styles.body) {
    css += `
      body {
        ${propertiesToCssString(styles.body)}
      }`;
  }

  if (styles.blocklyDiv) {
    css += `
      #blocklyDiv {
        ${propertiesToCssString(styles.blocklyDiv)}
      }`;
  }

  if (styles.button) {
    css += `
      button {
        ${propertiesToCssString(styles.button)}
      }`;
  }

  if (styles.buttonHover) {
    css += `
      button:hover {
        ${propertiesToCssString(styles.buttonHover)}
      }`;
  }

  if (styles.heading) {
    css += `
      h1 {
        ${propertiesToCssString(styles.heading)}
      }`;
  }

  return css;
}