export type Block = {
  type: string;
  message0?: string;
  colour?: number;
  tooltip?: string;
  previousStatement?: null;
  nextStatement?: null;
  helpUrl?: string;
  output?: boolean | null;
};

export type Toolbox = {
  kind: string;
  contents: Array<{
    kind: string;
    type: string;
  }>;
};

export type Workspace = {
  scrollbars: boolean;
  trashcan: boolean;
};
