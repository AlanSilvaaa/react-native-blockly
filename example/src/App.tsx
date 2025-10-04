import WebView from 'react-native-webview';
import { Text, View, StyleSheet } from 'react-native';
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
console.log("This is a test of the Blockly class:", blockly.greet());

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
