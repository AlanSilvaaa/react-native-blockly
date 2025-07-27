import { multiply } from 'react-native-blockly';
import WebView from 'react-native-webview';
import { Text, View, StyleSheet } from 'react-native';

// const result = multiply(3, 7);

const initialHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Blockly Block</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f9f9f9;
      }
      #blocklyDiv {
        width: 800px;
        height: 500px;
        border: 1px solid #ddd;
      }
      button {
        margin-top: 15px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1>Custom Blockly Block Example</h1>
    <div id="blocklyDiv"></div>
    <button id="runCodeButton">Run Code</button>

    <!-- Import required Blockly packages -->
    <script src="https://unpkg.com/blockly/blockly_compressed.js"></script>
    <script src="https://unpkg.com/blockly/blocks_compressed.js"></script>
    <script src="https://unpkg.com/blockly/javascript_compressed.js"></script>
    <script src="https://unpkg.com/blockly/msg/en.js"></script>
    <script>
      // Define the custom block using JSON
      console.log('Blockly namespace:', typeof Blockly);
      console.log('Blockly.JavaScript namespace:', typeof Blockly.JavaScript);
      console.log('javascript.javascriptGenerator:', typeof javascript.javascriptGenerator);

      Blockly.defineBlocksWithJsonArray([
        {
          "type": "moveForward",
          "message0": "Move Forward",
          "output": null,
          "colour": 230,
          "tooltip": "Command to move forward",
          "helpUrl": ""
        }
      ]);

      javascript.javascriptGenerator.forBlock['moveForward'] = function (block) {
        return 'alert("hello world")\\n';
        };

      // Define the toolbox with the custom block
      const toolbox = {
        kind: 'flyoutToolbox',
        contents: [
          {
            kind: 'block',
            type: 'moveForward',
          },
        ],
      };

      // Inject Blockly into the workspace
      const workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
        scrollbars: true,
        trashcan: true,
      });

      // Run the code when the button is clicked
      document.getElementById('runCodeButton').addEventListener('click', () => {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log('Generated Code:', code); // For debugging
        try {
          eval(code); // Execute the code
        } catch (error) {
          alert('Error: ' + error.message);
        }
      });
    </script>
  </body>
</html>
  `;

export default function App() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: initialHtml, baseUrl: 'file:///android_asset/' }}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
