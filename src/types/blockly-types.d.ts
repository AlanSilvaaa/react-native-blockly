import type { StandardBlockType } from '../constants/blockly-constants';

export type { StandardBlockType };

export type Block = {
  type: string | StandardBlockType;
  message0?: string;
  colour?: number;
  tooltip?: string;
  previousStatement?: null;
  nextStatement?: null;
  helpUrl?: string;
  output?: boolean | null;
  code?: string;
};

export type Toolbox = {
  kind: string;
  contents: Array<{
    kind: string;
    type: string | StandardBlockType;
  }>;
};

export type Workspace = {
  scrollbars: boolean;
  trashcan: boolean;
};
