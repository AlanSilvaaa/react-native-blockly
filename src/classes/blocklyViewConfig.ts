import type { Toolbox, Workspace } from '../types/blockly-types';
import type { BlocklyStyles } from '../types/css';
import { DEFAULT_BLOCKLY_STYLES } from '../utils/defaults';

export class BlocklyViewConfig {
  toolbox: Toolbox = { kind: '', contents: [] };
  workspace: Workspace = { scrollbars: false, trashcan: false };
  styles: BlocklyStyles = DEFAULT_BLOCKLY_STYLES;

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

   /**
   * Sets custom CSS styles for the Blockly workspace
   * 
   * @param styles - Custom CSS styles object
   * 
   * @example
   * ```typescript
   * config.setStyles({
   *   body: { backgroundColor: '#000' },
   *   blocklyDiv: { width: '1000px', height: '600px' }
   * });
   * ```
   */
  setStyles(styles: Partial<BlocklyStyles>): void {
    this.styles = { ...styles };
  }

  getStyles(): BlocklyStyles {
    return this.styles;
  }
}
