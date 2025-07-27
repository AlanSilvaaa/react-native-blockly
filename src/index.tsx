import WebView from "react-native-webview";
import type { Block } from "./types";
import { parseToString } from "./parseToString";
import { stringToBlockly } from "./stringToBlockly";

export class Blockly {
  blocks: Block[] = [];
  constructor(public name: string) { }

  greet(): string {
    return `Hello, ${this.name}!`;
  }

  createBlock(block: Block): void {
    this.blocks.push(block);
  }

  getBlocks(): Block[] {
    return this.blocks;
  }
}

// Define props type for the component
type BlocklyViewProps = {
  Blockly: Blockly;
  onMessage?: (data: string) => void;
};

export default function BlocklyView({ Blockly, onMessage }: BlocklyViewProps) {
  const blocks = parseToString(Blockly);
  const blocklyHtml = stringToBlockly(blocks);
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