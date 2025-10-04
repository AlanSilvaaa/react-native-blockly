<div align=center>
  <img src="react-native-blockly-logo.png" alt="React native blockly logo" width="400">
</div>

<div align="center">

[![Lint](https://img.shields.io/github/actions/workflow/status/AlanSilvaaa/react-native-blockly/ci.yml?branch=main&label=lint&logo=eslint)](https://github.com/AlanSilvaaa/react-native-blockly/actions/workflows/ci.yml)
[![Test](https://img.shields.io/github/actions/workflow/status/AlanSilvaaa/react-native-blockly/ci.yml?branch=main&label=test&logo=jest)](https://github.com/AlanSilvaaa/react-native-blockly/actions/workflows/ci.yml)
[![Build Library](https://img.shields.io/github/actions/workflow/status/AlanSilvaaa/react-native-blockly/ci.yml?branch=main&label=build%20library&logo=typescript)](https://github.com/AlanSilvaaa/react-native-blockly/actions/workflows/ci.yml)
[![Build Web](https://img.shields.io/github/actions/workflow/status/AlanSilvaaa/react-native-blockly/ci.yml?branch=main&label=build%20web&logo=expo)](https://github.com/AlanSilvaaa/react-native-blockly/actions/workflows/ci.yml)

</div>

npm package that adds Google's [Blockly](https://developers.google.com/blockly) visual programming editor into React Native.

## General Overview

This library bridges Google's Blockly visual programming framework with React Native by wrapping a WebView component. Some of the characteristics of the package are:

- **Block Management**: Define custom blocks with configurable properties (type, messages, colors, tooltips, connections)
- **Toolbox Configuration**: Create dynamic toolboxes with organized block categories and accessibility controls
- **Workspace Customization**: Configure workspace behavior including scrolling, trash can, and visual settings
- **HTML Generation**: Automatically transpile block definitions and configurations into executable HTML/JavaScript
- **Validation System**: Built-in validation to ensure block-toolbox consistency and prevent runtime errors
- **WebView Integration**: Seamless embedding of Blockly workspace within React Native components using react-native-webview

## Installation
use npm or yarn to install the package:
```bash
npm install react-native-blockly
```

## Usage
Here is a simple example of how to use the library:
```tsx
import BlocklyView, { Blockly, BlocklyViewConfig } from 'react-native-blockly'

const blockly = new Blockly();
const config = new BlocklyViewConfig();

blockly.createBlock({
  type: 'helloWorld',
  message0: 'Hello World',
  output: null,
  colour: 230,
  tooltip: 'Command to say hello',
  helpUrl: '',
  code: 'return "Hello World!"'
});

config.setToolbox({
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'helloWorld'
    }
  ]
});

function onMessage(data: string) {
  console.log('Message from Blockly:', data); // on this case, data would be "Hello World!"
}

export default function App() {
  return (
    <BlocklyView Blockly={blockly} Config={config} onMessage={onMessage} />
  );
}
```

To see more examples, check the [examples directory](./example).


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Author
[@AlanSilvaaa](https://github.com/AlanSilvaaa)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)