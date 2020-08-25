'use strict';

goog.provide('Blockly.Blocks.otto_');
goog.provide('Blockly.Blocks.masaylo_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');
Blockly.Blocks['masaylo_arranca'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_START_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MASAYLO_URL);  }
};

Blockly.Arduino['masaylo_arranca'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';

  Blockly.Arduino.setups_['masaylo_init']='m.init(5,6,9,10);';
  var code = '';
  return code;
};
Blockly.Blocks['masaylo_arranca_personalizado']={init:function(){
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_STARTPERS_TEXT + Blockly.Msg.MIA)
  .appendField(new Blockly.FieldNumber("0"), "MIA") .appendField(Blockly.Msg.MIB) .appendField(new Blockly.FieldNumber("0"), "MIB")
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.MDA)
  .appendField(new Blockly.FieldNumber("0"), "MDA")  .appendField(Blockly.Msg.MDB).appendField(new Blockly.FieldNumber("0"), "MDB");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_STARTPERS_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.MASAYLO_STARTPERS_URL);}
};

Blockly.Arduino['masaylo_arranca_personalizado']=function(block){
  var vMIA = block.getFieldValue('MIA');
  var vMIB = block.getFieldValue('MIB');
  var vMDA= block.getFieldValue('MDA');
  var vMDB = block.getFieldValue('MDB');
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_defs'] = '//No defs';
  Blockly.Arduino.setups_['masaylo_init']='m.init('+vMIA+','+vMIB+','+vMDA+','+vMDB+');';

  var code = '//calibrated\n';
  return code;
};
Blockly.Blocks['masaylo_velocidad'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*"))
        .appendField(Blockly.Msg.MASAYLO_VELOCIDAD_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.MASAYLO_MOVE_CHOICE), "masaylo_move_choice").appendField(new Blockly.FieldDropdown(Blockly.Msg.MASAYLO_VELOCITY_CHOICE), "masaylo_velocity_choice");
//    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#f5b041");
}
};


Blockly.Arduino['masaylo_velocidad'] = function(block) {
  var dropdown_masaylo_move_choice = block.getFieldValue('masaylo_move_choice');
    var dropdown_masaylo_velocity_choice = block.getFieldValue('masaylo_velocity_choice');
  //var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_defs'] = '//no defs \n';
  // Blockly.Arduino.setups_['masaylo_init']='m.init(5,6,9,10);';
  var code = '';
  var quick=0;
  switch(dropdown_masaylo_velocity_choice){
    case 'TOP':
      quick=255;
      break;
      case 'QUICK':
        quick=220;
        break;
        case 'MEDIUM':
          quick=200;
          break;
          case 'SLOW':
            quick=175;
            break;
            case 'SLOWER':
              quick=140;
              break;
  }
  switch(dropdown_masaylo_move_choice) {
	case 'FORWARD':
		code = 'm.adelante('+quick+'); // FORWARD\n';
		break;
	case 'BACKWARD':
		code = 'm.atras('+quick+'); // BACKWARD\n';
		break;
	case 'LEFT':
		code = 'm.izquierda('+quick+'); // LEFT\n';
		break;
	case 'RIGHT':
		code = 'm.derecha('+quick+'); // RIGHT\n';
		break;
	case 'STOP':
		code = 'm.alto(); //STOP\n';
		break;

  }
  return code;
};
Blockly.Blocks['masaylo_adelante'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_forward.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_FORWARD_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_FORWARD_TOOLTIP);
    }
};

Blockly.Arduino['masaylo_adelante'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';


  var code = 'm.adelante();\n';
  return code;
};
Blockly.Blocks['masaylo_atras'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_backward.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_BACKWARD_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_BACKWARD_TOOLTIP);
    }
};

Blockly.Arduino['masaylo_atras'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';


  var code = 'm.atras();\n';
  return code;
};
Blockly.Blocks['masaylo_izquierda'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_left.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_LEFT_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_LEFT_TOOLTIP);
    }
};

Blockly.Arduino['masaylo_izquierda'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';


  var code = 'm.izquierda();\n';
  return code;
};
Blockly.Blocks['masaylo_derecha'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_right.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_RIGHT_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_RIGHT_TOOLTIP);
    }
};

Blockly.Arduino['masaylo_derecha'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';


  var code = 'm.derecha();\n';
  return code;
};
Blockly.Blocks['masaylo_alto'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_stop.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_STOP_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_STOP_TOOLTIP);
    }
};

Blockly.Arduino['masaylo_alto'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';


  var code = 'm.alto();\n';
  return code;
};

Blockly.Blocks['masaylo_BT_INIT'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/Bluetooth.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_BTINIT_TEXT).appendField(Blockly.Msg.MASAYLO_Tx_TEXT)
    .appendField(new Blockly.FieldNumber("0"), "Tx") .appendField(Blockly.Msg.MASAYLO_Rx_TEXT) .appendField(new Blockly.FieldNumber("0"), "Rx");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_BT_TOOLTIP);
     }
};
Blockly.Arduino['masaylo_BT_INIT']=function(block){
  var vTx = block.getFieldValue('Tx');
  var vRx = block.getFieldValue('Rx');

  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_defs'] = '//No defs';
  Blockly.Arduino.setups_['masaylo_init']='m.init(5,6,9,10);\n';
  Blockly.Arduino.setups_['masaylo_bt_init']='m.BT('+vTx+','+vRx+');\n';

  var code = '//calibrated\n';
  return code;
};
Blockly.Blocks['masaylo_getdistance'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/us.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_GETDISTANCE_TOOLTIP);
  }
};
Blockly.Arduino['masaylo_getdistance'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.setups_['masaylo_us_init']='m.ultrasonidos(7,8);\n';
  // Blockly.Arduino.variables_['masaylo_distance'] = 'int distance;\n';
  Blockly.Arduino.definitions_['masaylo_defs'] = '';
  var code = 'm.distancia()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_blackleft'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_black_left.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLACKLEFT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLACKLEFT_TOOLTIP);
  }
};
Blockly.Arduino['masaylo_blackleft'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.setups_['masaylo_ir_init']='m.infrarrojos(2,3);\n';


  var code = '(m.nIzquierda())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_blackright'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_black_right.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLACKRIGHT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLACKRIGHT_TOOLTIP);
  }
};
Blockly.Arduino['masaylo_blackright'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.setups_['masaylo_ir_init']='m.infrarrojos(2,3);\n';


  var code = '(m.nDerecha())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_blankright'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_blank_right.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLANKRIGHT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLANKRIGHT_TOOLTIP);
  }
};
Blockly.Arduino['masaylo_blankright'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.setups_['masaylo_ir_init']='m.infrarrojos(2,3);\n';


  var code = '(m.bDerecha())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_blankleft'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_blank_left.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLANKLEFT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLANKLEFT_TOOLTIP);
  }
};
Blockly.Arduino['masaylo_blankleft'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.setups_['masaylo_ir_init']='m.infrarrojos(2,3);\n';


  var code = '(m.bIzquierda())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
