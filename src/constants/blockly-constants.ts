/**
 * Array of standard Blockly block types that are available by default.
 * These blocks are built into the Blockly library and don't need to be
 * defined in the custom blocks array.
 */
export const STANDARD_BLOCKLY_BLOCK_TYPES = [
  // Logic blocks
  'logic_compare',
  'logic_operation',
  'logic_negate',
  'logic_boolean',
  'logic_null',
  'logic_ternary',
  // Control flow blocks
  'controls_if',
  'controls_ifelse',
  'controls_repeat_ext',
  'controls_whileUntil',
  'controls_for',
  'controls_forEach',
  'controls_flow_statements',
  // Math blocks
  'math_number',
  'math_arithmetic',
  'math_single',
  'math_trig',
  'math_constant',
  'math_number_property',
  'math_round',
  'math_on_list',
  'math_modulo',
  'math_constrain',
  'math_random_int',
  'math_random_float',
  'math_atan2',
  // Text blocks
  'text',
  'text_multiline',
  'text_join',
  'text_append',
  'text_length',
  'text_isEmpty',
  'text_indexOf',
  'text_charAt',
  'text_getSubstring',
  'text_changeCase',
  'text_trim',
  'text_count',
  'text_replace',
  'text_reverse',
  'text_print',
  'text_prompt_ext',
  // List blocks
  'lists_create_with',
  'lists_create_empty',
  'lists_repeat',
  'lists_length',
  'lists_isEmpty',
  'lists_indexOf',
  'lists_getIndex',
  'lists_setIndex',
  'lists_getSublist',
  'lists_split',
  'lists_sort',
  'lists_reverse',
  // Color blocks
  'colour_picker',
  'colour_random',
  'colour_rgb',
  'colour_blend',
  // Variable blocks
  'variables_get',
  'variables_set',
  // Function/Procedure blocks
  'procedures_defnoreturn',
  'procedures_defreturn',
  'procedures_callnoreturn',
  'procedures_callreturn',
  'procedures_ifreturn',
] as const;

/**
 * Set of standard Blockly block types for efficient lookup.
 * Used for runtime validation.
 */
export const STANDARD_BLOCKLY_BLOCKS = new Set(STANDARD_BLOCKLY_BLOCK_TYPES);

/**
 * Type representing all standard Blockly block types.
 * Derived from the constant array to ensure type and runtime values stay in sync.
 */
export type StandardBlockType = (typeof STANDARD_BLOCKLY_BLOCK_TYPES)[number];
