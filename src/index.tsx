import WebView from 'react-native-webview';
import type { BlocklyViewProps } from './types/blockly-view-types';
import {
  parseBlocksToString,
  parseToolboxToString,
  parseWorkspaceToString,
} from './parsers/parseToString';
import { stringToBlockly } from './parsers/stringToBlockly';
import { Blockly } from './classes/blockly';
import { BlocklyViewConfig } from './classes/blocklyViewConfig';
import { blockInToolbox, noReturnStatement } from './utils/showWarnings';

// Export both classes so they can be imported by users
export { Blockly, BlocklyViewConfig };

/**
 * BlocklyView wrapper for rendering the Blockly workspace.
 *
 * It takes an instance of the Blockly class, a BlocklyViewConfig instance, and an optional onMessage callback and
 * parses the contents to generate an HTML and load it on the WebView.
 *
 * @param param0 - Props for the component
 * @returns JSX.Element
 */
export default function BlocklyView({
  Blockly,
  Config,
  onMessage,
  style,
}: BlocklyViewProps) {
  /**
   * parse the contents of the Blockly instance and Config to generate the HTML string
   * that will be loaded in the WebView.
   */
  const blocks = parseBlocksToString(Blockly.getBlocks());
  const toolbox = parseToolboxToString(Config.getToolbox());
  const workspace = parseWorkspaceToString(Config.getWorkspace());
  const blocklyHtml = stringToBlockly(blocks, toolbox, workspace);

  /**
   * Show warnings
   */
  blockInToolbox(Blockly.getBlocks(), Config.getToolbox());
  noReturnStatement(Blockly.getBlocks());

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: blocklyHtml, baseUrl: 'file:///android_asset/' }}
      style={style || { flex: 1 }}
      onMessage={(event) => {
        // console.log('Message received from webview:', event.nativeEvent.data);
        if (onMessage) {
          onMessage(event.nativeEvent.data); // Call the callback with the data
        }
      }}
    />
  );
}
