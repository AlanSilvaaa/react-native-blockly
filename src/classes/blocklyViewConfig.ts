import type { Toolbox, Workspace } from '../types/blockly-types';

export class BlocklyViewConfig {
  toolbox: Toolbox = { kind: '', contents: [] };
  workspace: Workspace = { scrollbars: false, trashcan: false };

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
