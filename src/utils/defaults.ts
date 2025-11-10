import type { BlocklyStyles } from '../types/css';

/**
 * Default CSS styles for Blockly workspace
 */
export const DEFAULT_BLOCKLY_STYLES: BlocklyStyles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  blocklyDiv: {
    width: '800px',
    height: '500px',
    border: '1px solid #ddd',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  heading: {},
};