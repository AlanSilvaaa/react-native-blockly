import type { Block, Toolbox, Workspace } from '../types/blockly-types';

/**
 * Blockly class to manage blockly configuration.
 */
export class Blockly {
  blocks: Block[] = [];
  toolbox: Toolbox = { kind: '', contents: [] };
  workspace: Workspace = { scrollbars: false, trashcan: false };
  constructor(public name: string) {}

  greet(): string {
    return `Hello, ${this.name}!`;
  }

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

  setToolbox(toolbox: Toolbox): void {
    this.toolbox = toolbox;
  }

  getToolbox(): Toolbox {
    return this.toolbox;
  }

  setWorkspace(workspace: Workspace): void {
    this.workspace = workspace;
  }

  getWorkspace(): Workspace {
    return this.workspace;
  }
}
