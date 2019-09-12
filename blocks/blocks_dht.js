Blockly.Blocks['dhtesp_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("setup")
        .appendField(new Blockly.FieldDropdown([["dht11","DHTesp::DHT11"], ["dht22","DHTesp::DHT22"], ["AM2302","DHTesp::AM2302"], ["RHT03","DHTesp::RHT03"]]), "dht_type")
        .appendField("pin")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "pin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("setupsensor DHT");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dht_read_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read temparature C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(260);
 this.setTooltip("read temparature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dhtesp_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read Humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(260);
 this.setTooltip("read humidity in %");
 this.setHelpUrl("");
  }
};