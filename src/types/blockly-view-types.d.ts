import type { Blockly } from '../classes/blockly';
import type { BlocklyViewConfig } from '../classes/blocklyViewConfig';
import type { StyleProp, ViewStyle } from 'react-native';
import type { CSSProperties } from 'react';

/**
 * Configuration options for the run code button
 */
export interface ButtonConfig {
  /**
   * Text to display on the button
   * @default 'Run Code'
   */
  text?: string;

  /**
   * CSS styles for the button as an object
   * @example { backgroundColor: 'red', color: 'white', padding: '10px' }
   */
  style?: CSSProperties;
}

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

  /**
   * Optional style prop for the WebView container.
   * Allows customization of the BlocklyView's dimensions and layout.
   * Defaults to `{ flex: 1 }` if not provided.
   *
   * @example
   * ```typescript
   * <BlocklyView
   *   Blockly={blockly}
   *   Config={config}
   *   style={{ flex: 1, backgroundColor: '#f0f0f0' }}
   * />
   * ```
   */
  style?: StyleProp<ViewStyle>;
};
