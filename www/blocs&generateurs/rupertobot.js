'use strict';

goog.provide('Blockly.Blocks.otto_');
goog.provide('Blockly.Blocks.masaylo_');
goog.provide('Blockly.Blockls.rupertobot_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');
Blockly.Blocks['rupertobot_arranca'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/rupertobotGeneral.png', 48, 48, "*")) .appendField(Blockly.Msg.RUPERTOBOT_START_TEXT).
  appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_MODE_CHOICE), "rupertobot_mode_choice") ;
  this.setInputsInline(false);
  this.setPreviousStatement(false);
  this.setNextStatement(true);
this.setColour("#a1ee44");
  this.setTooltip(Blockly.Msg.RUPERTOBOT_START_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);  }
};

Blockly.Arduino['rupertobot_arranca'] = function(block) {
    var dropdown_rupertobot_move_choice = block.getFieldValue('rupertobot_mode_choice');

Blockly.Arduino.includes_['rupertobot_lib'] = '#include <rupertobot.h>\nrupertobot ruperti'+dropdown_rupertobot_move_choice+';'
var code = '';
return code;
};

Blockly.Blocks['rupertobot_avanza_vueltas']={init:function(){
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rupertoAvanza.png', 48, 48, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_FORWARD ).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER);
    this.appendValueInput("spinNumber");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "RUPERTOBOT_SPIN_VELOCITY")
    ;
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_SPIN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_avanza_vueltas']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    block.getFieldValue('spinNumber');
    var v = block.getFieldValue('RUPERTOBOT_SPIN_VELOCITY');
  
  
    var code = 'ruperti.avanza('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_retrocede_vueltas']={init:function(){
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rupertoRetrocede.png', 48, 48, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_BACKWARD ).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER);
    this.appendValueInput("spinNumber");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "RUPERTOBOT_SPIN_VELOCITY")
    ;
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_SPIN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_retrocede_vueltas']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    block.getFieldValue('spinNumber');
    var v = block.getFieldValue('RUPERTOBOT_SPIN_VELOCITY');
  
  
    var code = 'ruperti.atras('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_avanza_distancia']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoAvanza.png', 48, 48, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_DISTANCE_FORWARD);
    this.appendValueInput("distance");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_DISTANCE_TEXT)
  
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity")
    ;
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_DISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_avanza_distancia']=function(block){
    var distance = Blockly.Arduino.valueToCode(block,"distance");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.avanzacm('+distance+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_retrocede_distancia']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoRetrocede.png', 48, 48, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_DISTANCE_BACKWARD);
    this.appendValueInput("distance");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_DISTANCE_TEXT)
  
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity")
    ;
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_DISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_retrocede_distancia']=function(block){
    var distance = Blockly.Arduino.valueToCode(block,"distance");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.atrascm('+distance+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_izquierda_vueltas']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoIzquierda.png', 60, 60, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_LEFT);
    this.appendValueInput("spinNumber");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER)
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_SPIN_LEFT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_izquierda_vueltas']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.izquierda('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_derecha_vueltas']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoDerecha.png', 60, 60, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_SPIN_RIGHT);
    this.appendValueInput("spinNumber");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER)
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_SPIN_RIGHT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_derecha_vueltas']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.derecha('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_izquierda_grados']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoIzquierda.png', 60, 60, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_GRADES_LEFT);
    this.appendValueInput("spinNumber");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER)
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_GRADES_LEFT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_izquierda_grados']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.giraIzquierda('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_derecha_grados']={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoDerecha.png', 60, 60, "*")).
    appendField(Blockly.Msg.RUPERTOBOT_GRADES_RIGHT);
    this.appendValueInput("spinNumber");
  
   this.appendDummyInput().
   appendField(Blockly.Msg.RUPERTOBOT_SPIN_NUMBER)
    .appendField(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY), "rupertobot_spin_velocity");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.RUPERTOBOT_GRADES_RIGHT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_derecha_grados']=function(block){
    var spinNumber = Blockly.Arduino.valueToCode(block,"spinNumber");
    var v = block.getFieldValue('rupertobot_spin_velocity');
  
  
    var code = 'ruperti.giraDerecha('+spinNumber+','+v+');\n';
    return code;
  };
  Blockly.Blocks['rupertobot_stop']={init:function(){
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rupertoStop.png', 60, 60, "*"))
  
    .appendField(Blockly.Msg.ESCORNABOT_STOP_TEXT)
    ;
  
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#A1EE44");
    this.setTooltip(Blockly.Msg.ESCORNABOT_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RUPERTOBOT_URL);}
  };
  
  Blockly.Arduino['rupertobot_stop']=function(block){
  
    var code = 'ruperti.alto();\n';
    return code;
  };
  Blockly.Blocks['rupertobot_buzzer_init'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/masaylo_activate_buzzer.png', 60, 60, "*")) .
    appendField(Blockly.Msg.MASAYLO_BUZZER_TEXT).
    appendField(new Blockly.FieldTextInput("12"),"buzzer" );
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_BUZZER_TOOLTIP);
     }
  };
  Blockly.Arduino['rupertobot_buzzer_init']=function(block){
  var vBuzzer = block.getFieldValue('buzzer');
  

  Blockly.Arduino.setups_['rupertobot_buzzer_init']='ruperti.zumbador('+vBuzzer+');\n';
  
  var code = '';
  return code;
  };
  Blockly.Blocks['rupertobot_buzzer_play'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/rupertoBeep.png', 60, 60, "*")) .
    appendField(Blockly.Msg.MASAYLO_PLAYBUZZER_TEXT);
   
    
    this.appendValueInput("frecuencia").appendField(Blockly.Msg.MASAYLO_FREQUENCY_TEXT);
    this.appendValueInput("duracion").appendField(Blockly.Msg.MASAYLO_TIME_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_BUZZER_PLAY_TOOLTIP);
     }
  };
  Blockly.Arduino['rupertobot_buzzer_play']=function(block){
  var vFrecuencia = Blockly.Arduino.valueToCode(block,"frecuencia");
  var vDuracion = Blockly.Arduino.valueToCode(block,"duracion");
  var code = 'ruperti.tono('+vFrecuencia+','+vDuracion+');\n';
  return code;
  };
  Blockly.Blocks['rupertobot_ir_init'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/rupertoIniciaIR.png', 60, 60, "*")) .
    appendField(Blockly.Msg.MASAYLO_IRINIT_TEXT);
    this.appendDummyInput().
    appendField(Blockly.Msg.MASAYLO_IRRIGHT_TEXT) .
    appendField(new Blockly.FieldTextInput("A0"),"IRRight" ).
    appendField(Blockly.Msg.MASAYLO_IRLEFT_TEXT).
    appendField(new Blockly.FieldTextInput("A1"),"IRLeft" );

    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.ESCORNABOT_IR_TOOLTIP);
     }
  };
  Blockly.Arduino['rupertobot_ir_init']=function(block){
  var vIRLeft = block.getFieldValue('IRLeft');
  var vIRRight = block.getFieldValue('IRRight');
  Blockly.Arduino.setups_['rupertobot_ir_init']='ruperti.IR('+vIRLeft+','+vIRRight+');';
  var code = '';
  return code;
  };
  Blockly.Blocks['rupertobot_blackleft'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_black_left.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLACKLEFT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLACKLEFT_TOOLTIP);
  }
};
Blockly.Arduino['rupertobot_blackleft'] = function(block) {
 
  var code = '(ruperti.negroIzquierda())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['rupertobot_blackright'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_black_right.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLACKRIGHT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLACKRIGHT_TOOLTIP);
  }
};
Blockly.Arduino['rupertobot_blackright'] = function(block) {


  var code = '(ruperti.negroDerecha())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['rupertobot_blankright'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_blank_right.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLANKRIGHT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLANKRIGHT_TOOLTIP);
  }
};
Blockly.Arduino['rupertobot_blankright'] = function(block) {

  var code = '(ruperti.blancoDerecha())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['rupertobot_blankleft'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/masaylo_blank_left.png', 48, 48, "*")).appendField(Blockly.Msg.MASAYLO_GETBLANKLEFT_TEXT);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_GETBLANKLEFT_TOOLTIP);
  }
};
Blockly.Arduino['rupertobot_blankleft'] = function(block) {


  var code = '(ruperti.blancoIzquierda())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['rupertobot_us_init'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/us.png', 48, 48, "*")) .
    appendField(Blockly.Msg.MASAYLO_USINIT_TEXT);
    this.appendDummyInput().
    appendField("Trigger: ").
    appendField(new Blockly.FieldTextInput("10"), "trigger") .
    appendField("Echo") .appendField(new Blockly.FieldTextInput("11"), "echo");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_US_TOOLTIP);
     }
  };
  Blockly.Arduino['rupertobot_us_init']=function(block){
    var vTrigger = block.getFieldValue('trigger');
    var vEcho = block.getFieldValue('echo');
  Blockly.Arduino.setups_['rupertobot_us_init']='ruperti.us('+vTrigger+','+vEcho+');';
  
  var code = '';
  return code;
  };
  Blockly.Blocks['rupertobot_get_distance'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/rupertoDistancia.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#a1ee44");
    this.setTooltip(Blockly.Msg.MASAYLO_GETDISTANCE_TOOLTIP);
  }
};
Blockly.Arduino['rupertobot_get_distance'] = function(block) {

  var code = 'ruperti.distancia()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks['rupertobot_gorjeo'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/r2d2chirp.png', 48, 48, "*")) .
  appendField(Blockly.Msg.MASAYLO_GORJEO_TEXT);
 
  

  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
this.setColour("#a1ee44");
  this.setTooltip(Blockly.Msg.MASAYLO_GORJEO_TOOLTIP);
   }
};
Blockly.Arduino['rupertobot_gorjeo']=function(block){

  Blockly.Arduino.includes_['rupertobot_gorjeo']='int k = 0;\nint i = 0;\nint v = 0;\nlong random_int2(int a,int b)\n'+
  ' {\n  if (a > b) {\n    int c = a;\n    a = b;\n    b = c;\n  }\n  return random(a,b);\n}\n'+
  'void frase2() {\n  k = random_int2(1000, 2001);\n  for (i=0 ; i<=random_int2(100, 2001) ; i=i+(1)) {\n'+
  'ruperti.tono(k + i * 2,random_int2(0.9, 3));\n  }\n  for (i=0 ; i<=random_int2(100, 1001) ; i=i+(1)) {\n'+
  'ruperti.tono(k + i * -10,random_int2(0.9, 3));\n  }\n}\nvoid frase1() {\n  k = random_int2(1000, 2001);\n'+
  'for (i=0 ; i<=random_int2(100, 2001) ; i=i+(1)) {\n    ruperti.tono(k + i * -2,random_int2(0.9, 3));\n'+
  '  }\n  for (i=0 ; i<=random_int2(100, 1001) ; i=i+(1)) {\n    ruperti.tono(k + i * 10,random_int2(0.9, 3));\n  }\n}\n'+
  'void gorjeo() {\n  v = random_int2(1, 8);\n  switch (v) {\n  case 1:\n    frase1();\n'+
  '    break;\n   case 2:\n    frase2();\n    break;\n   case 3:\n    frase1();\n    frase2();\n'+
  '    break;\n   case 4:\n    frase1();\n    frase2();\n    frase1();\n    break;\n   case 5:\n'+
  '    frase1();\n    frase2();\n    frase1();\n    frase2();\n    frase1();\n    break;\n'+
  '   case 6:\n    frase2();\n    frase1();\n    frase2();\n    break;\n  }\n  k = 2000;\n'+
  '  for (i=0 ; i<=random_int2(3, 10) ; i=i+(1)) {\n    ruperti.tono(k + random_int2(-1700, 2001),random_int2(70, 171));\n'+
  '    delay(random_int2(0, 31));\n  }\n}';
  Blockly.Arduino.setups_['rupertobot_gorjeo_init']='randomSeed(analogRead(A0));\n';
  
  var code = 'gorjeo();\n';
  return code;
  };