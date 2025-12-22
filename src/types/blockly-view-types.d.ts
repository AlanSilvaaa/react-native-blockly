import type { Blockly } from '../classes/blockly';
import type { BlocklyViewConfig } from '../classes/blocklyViewConfig';

/**
 * Props for the BlocklyView component
 */
export type BlocklyViewProps = {
  /**
   * Instance of the Blockly class that manages block definitions and logic.
   * Contains all the custom blocks that will be available in the workspace.
   *
   * @example
   * ```typescript
   * const blockly = new Blockly('MyBlockly');
   * blockly.createBlock({
   *   type: 'custom_block',
   *   message0: 'Custom Block',
   *   colour: 230
   * });
   * ```
   */
  Blockly: Blockly;

  /**
   * Instance of the BlocklyViewConfig class that manages UI configuration.
   * Handles toolbox layout, workspace settings, and visual appearance.
   *
   * @example
   * ```typescript
   * const config = new BlocklyViewConfig('MyConfig');
   * config.setToolbox({
   *   kind: 'flyoutToolbox',
   *   contents: [{ kind: 'block', type: 'custom_block' }]
   * });
   * config.setWorkspace({ scrollbars: true, trashcan: true });
   * ```
   */
  Config: BlocklyViewConfig;

  /**
   * Optional callback function that receives messages from the Blockly WebView.
   * Called whenever the WebView sends data using `window.ReactNativeWebView.postMessage()`.
   *
   * @param data - The message data sent from the WebView as a string
   *
   * @example
   * ```typescript
   * const handleMessage = (data: string) => {
   *  console.log('Message from Blockly:', data);
   * };
   * ```
   */
  onMessage?: (data: string) => void;
};
