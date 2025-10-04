import WebView from "react-native-webview";
import type { Block, Toolbox } from "./types";
import { parseBlocksToString, parseToolboxToString } from "./parseToString";
import { stringToBlockly } from "./stringToBlockly";

export class Blockly {
  blocks: Block[] = [];
  toolbox: Toolbox = { kind: '', contents: [] };
  constructor(public name: string) { }

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
}

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