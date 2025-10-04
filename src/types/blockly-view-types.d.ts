import type { Blockly } from "../classes/blockly";

// Define props type for the component
export type BlocklyViewProps = {
  Blockly: Blockly;
  onMessage?: (data: string) => void;
};