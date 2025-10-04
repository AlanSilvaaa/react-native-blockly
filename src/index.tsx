import WebView from "react-native-webview";
import type { BlocklyViewProps } from "./types/blockly-view-types";
import { parseBlocksToString, parseToolboxToString } from "./parsers/parseToString";
import { stringToBlockly } from "./parsers/stringToBlockly";
import { Blockly } from "./classes/blockly";
import { blockInToolbox } from "./utils/showWarnings";

// Export the Blockly class so it can be imported by users
export { Blockly };

/**
 * BlocklyView wrapper for rendering the Blockly workspace.
 * 
 * It takes an instance of the Blockly class and an optional onMessage callback and
 * parses the contents to generate an HTML and load it on the WebView.
 * 
 * @param param0 - Props for the component
 * @returns JSX.Element
 */
export default function BlocklyView({ Blockly, onMessage }: BlocklyViewProps) {

  /**
   * parse the contents of the Blockly instance to generate the HTML string
   * that will be loaded in the WebView.
   */
  const blocks = parseBlocksToString(Blockly.getBlocks());
  const toolbox = parseToolboxToString(Blockly.getToolbox());
  const blocklyHtml = stringToBlockly(blocks, toolbox);

  /**
   * Show warnings
   */
  blockInToolbox(Blockly.getBlocks(), Blockly.getToolbox());

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: blocklyHtml, baseUrl: 'file:///android_asset/' }}
      style={{ flex: 1 }}
      onMessage={(event) => {
        console.log('Message received from webview:', event.nativeEvent.data);
        // if (onMessage) {
        //   onMessage(event.nativeEvent.data); // Call the callback with the data
        // }
      }}
    />
  );
}