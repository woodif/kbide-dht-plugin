Blockly.JavaScript['dhtesp_setup'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_dht_type = block.getFieldValue('dht_type');
  var number_pin = block.getFieldValue('pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '#EXTINC#include "DHTesp.h"#END #VARIABLE DHTesp ${ variable_instance };#END ${ variable_instance }.setup(${ number_pin }, dropdown_dht_type)';

  return code;
};



Blockly.JavaScript['dht_read_temp'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '${variable_instance}.getTemperature()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dhtesp_read_humidity'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '${variable_instance}.getHumidity()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};