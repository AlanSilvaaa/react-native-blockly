/**
 * Main function to convert all of the characteristics of a Blockly instance into a string
 *
 * @param blocks blocks string
 * @param toolbox toolbox string
 * @param workspace workspace string (JSON stringified workspace configuration)
 * @param cssStyles CSS styles string
 * @returns a complete HTML string ready to be loaded in the WebView
 */
export function stringToBlockly(blocks: string, toolbox: string, workspace: string, cssStyles: string): string {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Blockly Block</title>
    <style>
      ${cssStyles}
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

      ${blocks ?? ''}

      // Define the toolbox with the custom block
      const toolbox = ${toolbox || `{}`};

      // Parse workspace configuration
      const workspaceConfig = ${workspace || `{}`};

      // Inject Blockly into the workspace
      const workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
        ...workspaceConfig,
      });

      // Run the code when the button is clicked
      document.getElementById('runCodeButton').addEventListener('click', () => {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log('Generated Code:', code); // For debugging
        try {
          // eval(code); // Execute the code
          window.ReactNativeWebView.postMessage(code); // Send the code to the app
        } catch (error) {
          alert('Error: ' + error.message);
        }
      });
    </script>
  </body>
</html>
  `;
}
