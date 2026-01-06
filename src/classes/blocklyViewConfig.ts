import type { Toolbox, Workspace } from '../types/blockly-types';
import type { ButtonConfig } from '../types/blockly-view-types';
import { DEFAULT_BUTTON_TEXT, DEFAULT_BUTTON_STYLE } from '../utils/defaults';

export class BlocklyViewConfig {
  toolbox: Toolbox = { kind: '', contents: [] };
  workspace: Workspace = { scrollbars: false, trashcan: false };
  buttonConfig: ButtonConfig = {
    text: DEFAULT_BUTTON_TEXT,
    style: DEFAULT_BUTTON_STYLE,
  };

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

  setButtonConfig(buttonConfig: ButtonConfig): void {
    this.buttonConfig = { ...this.buttonConfig, ...buttonConfig };
  }

  getButtonConfig(): ButtonConfig {
    return this.buttonConfig;
  }
}
