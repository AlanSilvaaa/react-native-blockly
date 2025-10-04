import BlocklyView, { Blockly } from 'react-native-blockly';

const blockly = new Blockly('MyBlockly');

blockly.createBlock({
  type: 'moveForward',
  message0: 'Move Forward',
  output: null,
  colour: 230,
  tooltip: 'Command to move forward',
  helpUrl: ''
});
blockly.createBlock({
  type: 'moveBackward',
  message0: 'Move Backward',
  output: null,
  colour: 230,
  tooltip: 'Command to move backward',
  helpUrl: ''
});

blockly.setToolbox({
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'moveForward'
    },
    {
      kind: 'block',
      type: 'moveBackward'
    }
  ]
});

blockly.setWorkspace({
  scrollbars: true,
  trashcan: true
});

// TODO: when wrapping the BlocklyView component into a <View> component
// the webview does not render properly
export default function App() {
  return (
    <BlocklyView Blockly={blockly} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
