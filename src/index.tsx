import WebView from "react-native-webview";
import type { Block, Toolbox } from "./types";
import { parseBlocksToString, parseToolboxToString } from "./parseToString";
import { stringToBlockly } from "./stringToBlockly";
import { Blockly } from "./classes/blockly";

// Export the Blockly class so it can be imported by users
export { Blockly };

// Define props type for the component
type BlocklyViewProps = {
  Blockly: Blockly;
  onMessage?: (data: string) => void;
};

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