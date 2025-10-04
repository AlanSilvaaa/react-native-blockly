import BlocklyView, { Blockly, BlocklyViewConfig } from 'react-native-blockly';

const blockly = new Blockly('MyBlockly');
const config = new BlocklyViewConfig('MyConfig');

blockly.createBlock({
  type: 'moveForward',
  message0: 'Move Forward',
  output: null,
  colour: 230,
  tooltip: 'Command to move forward',
  helpUrl: '',
  code: 'return "Hello from the moveForward block!"'
});
blockly.createBlock({
  type: 'moveBackward',
  message0: 'Move Backward',
  output: null,
  colour: 230,
  tooltip: 'Command to move backward',
  helpUrl: '',
});
blockly.createBlock({
  type: 'alert',
  message0: 'Show Alert',
  output: null,
  colour: 230,
  tooltip: 'Command to show an alert',
  helpUrl: '',
  code: `return "alert('hello from alert block')"\n`
});

config.setToolbox({
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'moveForward'
    },
    {
      kind: 'block',
      type: 'moveBackward'
    },
    {
      kind: 'block',
      type: 'alert'
    }
  ]
});

config.setWorkspace({
  scrollbars: true,
  trashcan: true
});

function onMessage(data: string) {
  console.log('Message from Blockly:', data);
}

// TODO: when wrapping the BlocklyView component into a <View> component
// the webview does not render properly
export default function App() {
  return (
    <BlocklyView Blockly={blockly} Config={config} onMessage={onMessage} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
