import type { Block, Toolbox } from '../types/blockly-types';

/**
 * Validates if blocks and toolbox have matching pairs and shows warnings for mismatches
 * 
 * @param blocks - Array of block definitions
 * @param toolbox - Toolbox configuration
 */
export function blockInToolbox(blocks: Block[], toolbox: Toolbox | null): void {
  const warnings: string[] = [];
  const missingInToolbox: string[] = [];
  const missingInBlocks: string[] = [];

  // If no toolbox is provided, show warning and return
  if (!toolbox) {
    console.warn('No toolbox provided. Blocks will not be accessible in the workspace.');
    return;
  }

  // Extract block types from blocks array
  const blockTypes = new Set(blocks.map((block) => block.type));

  // Extract block types from toolbox contents
  const toolboxTypes = new Set(
    toolbox.contents
      .filter((item) => item.kind === 'block')
      .map((item) => item.type)
  );

  // Check for blocks that are defined but not in toolbox
  blockTypes.forEach((blockType) => {
    if (!toolboxTypes.has(blockType)) {
      missingInToolbox.push(blockType);
      warnings.push(
        `Block '${blockType}' is defined but not available in the toolbox. Users won't be able to access this block.`
      );
    }
  });

  // Check for toolbox items that reference undefined blocks
  toolboxTypes.forEach((toolboxType) => {
    if (!blockTypes.has(toolboxType)) {
      missingInBlocks.push(toolboxType);
      warnings.push(
        `Toolbox references block '${toolboxType}' but this block is not defined. This will cause runtime errors.`
      );
    }
  });

  // Show warnings if any issues found
  if (warnings.length > 0) {
    console.warn('Block/Toolbox validation issues found:');
    warnings.forEach((warning) => console.warn(warning));
  }
}