'use strict';

goog.provide('Blockly.Blocks.escornabot_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');
goog.provide('Blockly.Arduino.masaylo');
Blockly.Blocks['escornabot_init'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/escornabot.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_MODE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_MODE_CHOICE), "escornabot_mode_choice") ;
    this.setInputsInline(false);
    this.setPreviousStatement(false);
    this.setNextStatement(true);
  this.setColour("#C39BD3");
    this.setTooltip(Blockly.Msg.ESCORNABOT_INIT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);  }
};

Blockly.Arduino['escornabot_init'] = function(block) {
    var dropdown_escornabot_move_choice = block.getFieldValue('escornabot_mode_choice');
  Blockly.Arduino.includes_['escornabot_lib'] = '#include <escornabot.h>\n'
	+ 'escornabot mirobot'+dropdown_escornabot_move_choice+';';
var code='';
return code;
};

Blockly.Blocks['escornabot_spin']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniRecto.png', 48, 48, "*"))  .appendField(Blockly.Msg.ESCORNABOT_SPIN ).appendField(Blockly.Msg.ESCORNABOT_SPIN_NUMBER)
  .appendField(new Blockly.FieldNumber("0"), "spinNumber")
  .appendField(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT)
  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY), "escornabot_spin_velocity")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_SPIN_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_spin']=function(block){
  var spinNumber = block.getFieldValue('spinNumber');
  var v = block.getFieldValue('escornabot_spin_velocity');


  var code = 'mirobot.drive('+spinNumber+','+v+');\n';
  return code;
};
Blockly.Blocks['escornabot_distance']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniRecto.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_DISTANCE).appendField(Blockly.Msg.ESCORNABOT_DISTANCE_TXT).appendField(Blockly.Msg.ESCORNABOT_DISTANCE_TEXT)
  .appendField(new Blockly.FieldNumber("0"), "distance")
  .appendField(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT)
  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY), "escornabot_spin_velocity")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_DISTANCE_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_distance']=function(block){
  var spinNumber = block.getFieldValue('distance');
  var v = block.getFieldValue('escornabot_spin_velocity');


  var code = 'mirobot.driveD('+spinNumber+','+v+');\n';
  return code;
};
Blockly.Blocks['escornabot_turnspin']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniGira.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_TURNSPIN_TEXT).appendField(Blockly.Msg.ESCORNABOT_SPIN_NUMBER)
  .appendField(new Blockly.FieldNumber("0"), "spinNumber")
  .appendField(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT)
  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY), "escornabot_spin_velocity")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_TURNSPIN_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_turnspin']=function(block){
  var spinNumber = block.getFieldValue('spinNumber');
  var v = block.getFieldValue('escornabot_spin_velocity');


  var code = 'mirobot.turn('+spinNumber+','+v+');\n';
  return code;
};
Blockly.Blocks['escornabot_turnangle']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniGira.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_TURNANGLE_TEXT).appendField(Blockly.Msg.ESCORNABOT_ANGLE_NUMBER)
  .appendField(new Blockly.FieldNumber("0"), "angle")
  .appendField(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT)
  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_SPIN_VELOCITY), "escornabot_spin_velocity")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_TURNANGLE_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_turnangle']=function(block){
  var angle = block.getFieldValue('angle');
  var v = block.getFieldValue('escornabot_spin_velocity');


  var code = 'mirobot.turnA('+angle+','+v+');\n';
  return code;
};
Blockly.Blocks['escornabot_stop']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniStop.png', 48, 48, "*"))

  .appendField(Blockly.Msg.ESCORNABOT_STOP_TEXT)
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_STOP_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_stop']=function(block){

  var code = 'mirobot.Stop();\n';
  return code;
};
Blockly.Blocks['escornabot_beep']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniZumba.png', 48, 48, "*"))

  .appendField(Blockly.Msg.ESCORNABOT_BEEP_TEXT)
  .appendField(new Blockly.FieldNumber("0"), "time")
  .appendField(Blockly.Msg.ESCORNABOT_TIME_TEXT)
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_BEEP_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_beep']=function(block){
  var time = block.getFieldValue('time');
  var code = 'mirobot.buzzON();\ndelay('+time+');\nmirobot.buzzOFF();\n';
  return code;
};
Blockly.Blocks['escornabot_ledon']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniLedon.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_LEDON_TEXT)

  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_LED_CHOICE), "escornabot_led_choice")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_LEDON_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_ledon']=function(block){
  var l = block.getFieldValue('escornabot_led_choice');


  var code = 'mirobot.ledON('+l+');\n';

  return code;
};
Blockly.Blocks['escornabot_ledoff']={init:function(){
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/escorniLedoff.png', 48, 48, "*")) .appendField(Blockly.Msg.ESCORNABOT_LEDOFF_TEXT)

  .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_LED_CHOICE), "escornabot_led_choice")
  ;

  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#C39BD3");
  this.setTooltip(Blockly.Msg.ESCORNABOT_LEDOFF_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.ESCORNABOT_URL);}
};

Blockly.Arduino['escornabot_ledoff']=function(block){
  var l = block.getFieldValue('escornabot_led_choice');


  var code = 'mirobot.ledOFF('+l+');\n';

  return code;
};
Blockly.Blocks['escornabot_getbutton'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/escorniPulsador.png', 48, 48, "*")).appendField(Blockly.Msg.ESCORNABOT_GETBUTTON_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.ESCORNABOT_BUTTON_SELECTED), "button");;
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#C39BF2");
    this.setTooltip(Blockly.Msg.ESCORNABOT_GETBUTTON_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['escornabot_getbutton'] = function(block) {
  var boton = block.getFieldValue('button');

  var code = 'mirobot.pushButton()==' + boton;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
