import type { Block } from '../types/blockly-types';

/**
 * Blockly class to manage blockly configuration.
 */
export class Blockly {
  blocks: Block[] = [];

  // TODO: create a new method called createBlocks that takes an array of Block objects
  // and adds them to the blocks array
  createBlocks(blocks: Block[]): void {
    this.blocks.push(...blocks);
  }

  /**
   * Creates a blockly block and add it to the blocks array.
   *
   * @param block - Block object to be added to the blocks array
   */
  createBlock(block: Block): void {
    this.blocks.push(block);
  }

  getBlocks(): Block[] {
    return this.blocks;
  }
}
