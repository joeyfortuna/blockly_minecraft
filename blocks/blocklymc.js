'use strict';

goog.provide('Blockly.Blocks.blocklymc');
goog.require('Blockly.Blocks');

Blockly.Blocks['blocklymc_drop_item'] = {
  /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
        .appendField("DROP");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Drop the chosen item.");
    this.contextMenu = false;
  }
};
Blockly.JavaScript['blocklymc_drop_item'] = function(block) {
  var code="dropItem();"
  return code;
};
Blockly.Blocks['blocklymc_get_item'] = {
  /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
        .appendField("GET");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Pick up the adjacent item.");
    this.contextMenu = false;
  }
};
Blockly.JavaScript['blocklymc_get_item'] = function(block) {
  var code="getItem();"
  return code;
};

Blockly.Blocks['blocklymc_left'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("grafx/left.png", 15, 15));

   // this.setOutput(true, 'Number');
   this.setNextStatement(true);
   this.setTooltip('Turn left.');
  }
};
Blockly.JavaScript['blocklymc_left'] = function(block) {
  var code="turnLeft();"
  return code;
};


Blockly.Blocks['blocklymc_right'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("grafx/right.png", 15, 15));

   // this.setOutput(true, 'Number');
   this.setNextStatement(true);
   this.setTooltip('Turn right.');
  }
};
Blockly.JavaScript['blocklymc_right'] = function(block) {
  var code="turnRight();"
  return code;
};


Blockly.Blocks['blocklymc_forward'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("grafx/forward.png", 15, 15));

   // this.setOutput(true, 'Number');
   this.setNextStatement(true);
   this.setTooltip('Move forward.');
  }
};
Blockly.JavaScript['blocklymc_forward'] = function(block) {
  var code="moveForward();"
  return code;
};


