import type { Blockly } from "../classes/blockly";
import type { BlocklyViewConfig } from "../classes/blocklyViewConfig";

// Define props type for the component
export type BlocklyViewProps = {
  Blockly: Blockly;
  Config: BlocklyViewConfig;
  onMessage?: (data: string) => void;
};