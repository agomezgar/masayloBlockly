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
    this.setPreviousStatement(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#f5b041");
    this.setTooltip(Blockly.Msg.MASAYLO_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MASAYLO_URL);  }
};

Blockly.Arduino['masaylo_arranca'] = function(block) {

  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\nMasaylo m;\n'

  Blockly.Arduino.definitions_['masaylo_pins'] = '//no hay definiciones \n';

  Blockly.Arduino.setups_['masaylo_init']='m.init();';
  var code = '';
  return code;
};
Blockly.Blocks['masaylo_arranca_personalizado']={init:function(){
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_STARTPERS_TEXT );
  this.appendDummyInput().
  appendField(Blockly.Msg.MIP) .

  appendField(new Blockly.FieldTextInput("6"), "MIP") .
  appendField(Blockly.Msg.MIA) .appendField(new Blockly.FieldTextInput("7"), "MIA").
  appendField(Blockly.Msg.MIB) .appendField(new Blockly.FieldTextInput("8"), "MIB");
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) 
  .appendField(Blockly.Msg.MDP).appendField(new Blockly.FieldTextInput("11"), "MDP")
 
    .appendField(Blockly.Msg.MDA).appendField(new Blockly.FieldTextInput("12"), "MDA").
    appendField(Blockly.Msg.MDB).appendField(new Blockly.FieldTextInput("13"), "MDB") ;
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_STARTPERS_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.MASAYLO_STARTPERS_URL);}
};

Blockly.Arduino['masaylo_arranca_personalizado']=function(block){
  var vMIP=block.getFieldValue('MIP');
  var vMDP=block.getFieldValue('MDP')
  var vMIA = block.getFieldValue('MIA');
  var vMIB = block.getFieldValue('MIB');
  var vMDA= block.getFieldValue('MDA');
  var vMDB = block.getFieldValue('MDB');
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
	+ 'Masaylo m;';
  Blockly.Arduino.definitions_['masaylo_defs'] = '//No defs';
  Blockly.Arduino.setups_['masaylo_init']='m.init('+vMIP+','+vMIA+','+vMIB+','+vMDP+','+vMDA+','+vMDB+');';

  var code = '';
  return code;
};
// Blockly.Blocks['masaylo_velocidad'] = {init: function() {
//     this.appendDummyInput() .appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*"))
//         .appendField(Blockly.Msg.MASAYLO_VELOCIDAD_TEXT) .
//         appendField(new Blockly.FieldDropdown(Blockly.Msg.MASAYLO_MOVE_CHOICE), "masaylo_move_choice").
//         appendField(Blockly.Msg.MASAYLO_VELOCIDAD2_TEXT).
//         appendField(new Blockly.FieldNumber("100"), "masaylo_velocity_choice").appendField("%");
//         //    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour("#f5b041");
// }
// };


// Blockly.Arduino['masaylo_velocidad'] = function(block) {
//   var dropdown_masaylo_move_choice = block.getFieldValue('masaylo_move_choice');
//     var vmasaylo_velocity_choice = block.getFieldValue('masaylo_velocity_choice');
//   //var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
//   Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
// 	+ 'Masaylo m;';
//   Blockly.Arduino.definitions_['masaylo_defs'] = '//no defs \n';
//   // Blockly.Arduino.setups_['masaylo_init']='m.init(5,6,9,10);';
//   var code = '';
//   var quick=0;
//  quick=parseInt(vmasaylo_velocity_choice*255/100);
//   switch(dropdown_masaylo_move_choice) {
// 	case 'FORWARD':
// 		code = 'm.adelante('+quick+'); // FORWARD\n';
// 		break;
// 	case 'BACKWARD':
// 		code = 'm.atras('+quick+'); // BACKWARD\n';
// 		break;
// 	case 'LEFT':
// 		code = 'm.izquierda('+quick+'); // LEFT\n';
// 		break;
// 	case 'RIGHT':
// 		code = 'm.derecha('+quick+'); // RIGHT\n';
// 		break;


//   }
//   return code;
// };
//A propuesta de Pedro Ruiz

Blockly.Blocks['masaylo_velocidad'] = {init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/7acabado.png', 48, 48, "*"))
      .appendField(Blockly.Msg.MASAYLO_VELOCIDAD_TEXT) .
      appendField(new Blockly.FieldDropdown(Blockly.Msg.MASAYLO_MOVE_CHOICE), "masaylo_move_choice").
      appendField(" a ");
      this.appendValueInput("masaylo_velocity").setAlign(Blockly.ALIGN_RIGHT);
     this.appendDummyInput().appendField("%");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#f5b041");
}
};


Blockly.Arduino['masaylo_velocidad'] = function(block) {
var dropdown_masaylo_move_choice = block.getFieldValue('masaylo_move_choice');
var vmasaylo_velocity_choice=Blockly.Arduino.valueToCode(block,"masaylo_velocity");
Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.definitions_['masaylo_defs'] = '//no defs \n';
// Blockly.Arduino.setups_['masaylo_init']='m.init(5,6,9,10);';
var code = '';
  var quick=0;
 quick=parseInt(vmasaylo_velocity_choice*255/100);
 if (isNaN(quick)){
   quick=vmasaylo_velocity_choice+'*255/100';
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


  }
  return code;
};

//Hasta aquí la propuesta de modificación

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
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/Bluetooth.png', 48, 48, "*")) .appendField(Blockly.Msg.MASAYLO_BTINIT_TEXT);
    this.appendDummyInput()
    .appendField(Blockly.Msg.MASAYLO_Tx_TEXT)
    .appendField(new Blockly.FieldTextInput("9"), "Tx") .appendField(Blockly.Msg.MASAYLO_Rx_TEXT) .appendField(new Blockly.FieldTextInput("10"), "Rx");
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
 
  Blockly.Arduino.setups_['masaylo_us_init']='m.BT('+vTx+','+vRx+');';
  var code = '';
  return code;
 
};
Blockly.Blocks['masaylo_US_INIT'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/us.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_USINIT_TEXT);
  this.appendDummyInput().
  appendField("Trigger: ").
  appendField(new Blockly.FieldTextInput("A2"), "trigger") .
  appendField("Echo") .appendField(new Blockly.FieldTextInput("A3"), "echo");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_US_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_US_INIT']=function(block){
var vTrigger = block.getFieldValue('trigger');
var vEcho = block.getFieldValue('echo');

Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.setups_['masaylo_us_init']='m.ultrasonidos('+vTrigger+','+vEcho+');';

var code = '';
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
  // Blockly.Arduino.variables_['masaylo_distance'] = 'int distance;\n';
  Blockly.Arduino.definitions_['masaylo_defs'] = '';
  var code = 'm.distancia()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_IR_INIT'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/activaIR.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_IRINIT_TEXT);
  this.appendDummyInput().
  appendField(Blockly.Msg.MASAYLO_IRLEFT_TEXT).
  appendField(new Blockly.FieldTextInput("A0"),"IRLeft" ) .
  appendField(Blockly.Msg.MASAYLO_IRRIGHT_TEXT) .
  appendField(new Blockly.FieldTextInput("A1"),"IRRight" );
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_IR_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_IR_INIT']=function(block){
var vIRLeft = block.getFieldValue('IRLeft');
var vIRRight = block.getFieldValue('IRRight');

Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.setups_['masaylo_ir_init']='m.infrarrojos('+vIRLeft+','+vIRRight+');';
var code = '';
return code;
};
Blockly.Blocks['masaylo_ENCODER_INIT'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_encoders.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_ENCODERS_TEXT);
  this.appendDummyInput().
  appendField(Blockly.Msg.MASAYLO_ENCLEFT_TEXT).
  appendField(new Blockly.FieldNumber("2"),"encLeft" ) .
  appendField(Blockly.Msg.MASAYLO_ENCRIGHT_TEXT) .
  appendField(new Blockly.FieldNumber("3"),"encRight" ).
  appendField(Blockly.Msg.MASAYLO_ENCDIAMETER_TEXT) .
  appendField(new Blockly.FieldNumber("7.5"),"encdiameter" );
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_ENC_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_ENCODER_INIT']=function(block){
var vencLeft = block.getFieldValue('encLeft');
var vencRight = block.getFieldValue('encRight');
var vencdiameter=block.getFieldValue('encdiameter');
Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.setups_['masaylo_enc_init']='m.encoders('+vencLeft+','+vencRight+','+vencdiameter+');';

var code = '';
return code;
};
Blockly.Blocks['masaylo_ENCODER_VUELTAS'] = {init: function() {
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_vueltas.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_ENCODER_VUELTAS_TEXT);
  this.appendValueInput("vueltas");
this.appendDummyInput().appendField(Blockly.Msg.MASAYLO_VUELTAS_TEXT2);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_ENCODER_VUELTAS_TOOLTIP);
}
};
Blockly.Arduino['masaylo_ENCODER_VUELTAS'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.definitions_['masaylo_defs'] = '';
  var vVueltas=Blockly.Arduino.valueToCode(block,"vueltas");
  var code = 'm.vueltas('+vVueltas+');\n';
  return code;
};

Blockly.Blocks['masaylo_ENCODER_DISTANCIA'] = {init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/masaylo_distancia.png', 48, 48, "*")) 
  .appendField(Blockly.Msg.MASAYLO_ENCODER_DISTANCIA_TEXT);
  this.appendValueInput("distancia");
  this.appendDummyInput().appendField(Blockly.Msg.MASAYLO_ENCODER_DISTANCIA_TEXT2);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_ENCODER_DISTANCIA_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_ENCODER_DISTANCIA'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.definitions_['masaylo_defs'] = '';
  var vDistancia=Blockly.Arduino.valueToCode(block,"distancia");
  var code = 'm.distancia('+vDistancia+');\n';
  return code;
};
Blockly.Blocks['masaylo_ENCODER_ANGULO'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_angulo.png', 48, 48, "*")) 
  .appendField(Blockly.Msg.MASAYLO_ENCODER_ANGULO_TEXT);
  this.appendValueInput("angulo");
  
  this.appendDummyInput().appendField(Blockly.Msg.MASAYLO_ENCODER_ANGULO_TEXT1);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_ENCODER_ANGULO_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_ENCODER_ANGULO'] = function(block) {
  Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n Masaylo m;\n';
  Blockly.Arduino.definitions_['masaylo_defs'] = '';
  var vAngulo=Blockly.Arduino.valueToCode(block,"angulo");
  var code = 'm.angulo('+vAngulo+');\n';
  return code;
};
Blockly.Blocks['masaylo_SERVOS_INIT'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/initServos.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_SERVOS_TEXT);
  this.appendDummyInput().
  appendField(Blockly.Msg.MASAYLO_CABEZA_TEXT).
  appendField(new Blockly.FieldTextInput("5"),"cabeza" ) .
  appendField(Blockly.Msg.MASAYLO_BRAZO_TEXT) .
  appendField(new Blockly.FieldTextInput("4"),"brazo" );
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_SERVOS_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_SERVOS_INIT']=function(block){
var vCabeza = block.getFieldValue('cabeza');
var vBrazo = block.getFieldValue('brazo');

Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.setups_['masaylo_servos_init']='m.servos('+vCabeza+','+vBrazo+');';

var code = '';
return code;
};
Blockly.Blocks['masaylo_GIRA_CABEZA'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_gira_cabeza.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_GIRA_CABEZA_TEXT);
this.appendValueInput("anguloCabeza");  
  this.appendDummyInput().
  appendField(Blockly.Msg.MASAYLO_GRADOS_TEXT) ;
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_GIRA_CABEZA_TOOLTIP);

   }
};
Blockly.Arduino['masaylo_GIRA_CABEZA']=function(block){
var vAngulo = Blockly.Arduino.valueToCode(block,"anguloCabeza");


Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;\n';

var code = 'm.giracabeza('+vAngulo+');\n';
return code;
};
Blockly.Blocks['masaylo_GIRA_BRAZO'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_gira_brazo.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_GIRA_BRAZO_TEXT);
  this.appendValueInput("anguloBrazo");
  
this.appendDummyInput().
  appendField(Blockly.Msg.MASAYLO_GRADOS_TEXT) ;
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
this.setTooltip(Blockly.Msg.MASAYLO_GIRA_BRAZO_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_GIRA_BRAZO']=function(block){
var vAngulo = Blockly.Arduino.valueToCode(block,"anguloBrazo");


Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;\n';

var code = 'm.girabrazo('+vAngulo+');\n';
return code;
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


  var code = '(m.bIzquierda())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['masaylo_BUZZER_INIT'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_activate_buzzer.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_BUZZER_TEXT).
  appendField(new Blockly.FieldTextInput("1"),"buzzer" );
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_BUZZER_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_BUZZER_INIT']=function(block){
var vBuzzer = block.getFieldValue('buzzer');

Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.setups_['masaylo_buzzer_init']='m.buzzer('+vBuzzer+');\n';

var code = '';
return code;
};
Blockly.Blocks['masaylo_BUZZER_PLAY'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_play_tone.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_PLAYBUZZER_TEXT);
 
  
  this.appendValueInput("frecuencia").appendField(Blockly.Msg.MASAYLO_FREQUENCY_TEXT);
  this.appendValueInput("duracion").appendField(Blockly.Msg.MASAYLO_TIME_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_BUZZER_PLAY_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_BUZZER_PLAY']=function(block){
var vFrecuencia = Blockly.Arduino.valueToCode(block,"frecuencia");
var vDuracion = Blockly.Arduino.valueToCode(block,"duracion");


Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';

var code = 'm.tono('+vFrecuencia+','+vDuracion+');\n';
return code;
};
Blockly.Blocks['masaylo_GORJEO'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/r2d2chirp.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_GORJEO_TEXT);
 
  

  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#f5b041");
  this.setTooltip(Blockly.Msg.MASAYLO_GORJEO_TOOLTIP);
   }
};
Blockly.Arduino['masaylo_GORJEO']=function(block){
Blockly.Arduino.includes_['masaylo_lib'] = '#include <Masaylo.h>\n'
+ 'Masaylo m;';
Blockly.Arduino.includes_['masaylo_gorjeo']='int k = 0;\nint i = 0;\nint v = 0;\nlong random_int(int a,int b)\n'+
' {\n  if (a > b) {\n    int c = a;\n    a = b;\n    b = c;\n  }\n  return random(a,b);\n}\n'+
'void frase2() {\n  k = random_int(1000, 2001);\n  for (i=0 ; i<=random_int(100, 2001) ; i=i+(1)) {\n'+
'm.tono(k + i * 2,random_int(0.9, 3));\n  }\n  for (i=0 ; i<=random_int(100, 1001) ; i=i+(1)) {\n'+
'm.tono(k + i * -10,random_int(0.9, 3));\n  }\n}\nvoid frase1() {\n  k = random_int(1000, 2001);\n'+
'for (i=0 ; i<=random_int(100, 2001) ; i=i+(1)) {\n    m.tono(k + i * -2,random_int(0.9, 3));\n'+
'  }\n  for (i=0 ; i<=random_int(100, 1001) ; i=i+(1)) {\n    m.tono(k + i * 10,random_int(0.9, 3));\n  }\n}\n'+
'void gorjeo() {\n  v = random_int(1, 8);\n  switch (v) {\n  case 1:\n    frase1();\n'+
'    break;\n   case 2:\n    frase2();\n    break;\n   case 3:\n    frase1();\n    frase2();\n'+
'    break;\n   case 4:\n    frase1();\n    frase2();\n    frase1();\n    break;\n   case 5:\n'+
'    frase1();\n    frase2();\n    frase1();\n    frase2();\n    frase1();\n    break;\n'+
'   case 6:\n    frase2();\n    frase1();\n    frase2();\n    break;\n  }\n  k = 2000;\n'+
'  for (i=0 ; i<=random_int(3, 10) ; i=i+(1)) {\n    m.tono(k + random_int(-1700, 2001),random_int(70, 171));\n'+
'    delay(random_int(0, 31));\n  }\n}';
Blockly.Arduino.setups_['masaylo_gorjeo_init']='randomSeed(analogRead(A0));\n';

var code = 'gorjeo();\n';
return code;
};