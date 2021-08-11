/*  communication  */
Blockly.Arduino["serial_init"]=function(block){
    var dropdown_speed=block.getFieldValue("SPEED");
	var dropdown_pin=block.getFieldValue("pin");
	window.localStorage.baudrate=dropdown_speed;
	switch (dropdown_pin) {
        case "0":
            Blockly.Arduino.setups_["serial_begin"]="Serial.begin(" + dropdown_speed + ");";
            break;
        case "19":
            Blockly.Arduino.setups_["serial_begin"]="Serial1.begin(" + dropdown_speed + ");";
            break;
        case "17":
            Blockly.Arduino.setups_["serial_begin"]="Serial2.begin(" + dropdown_speed + ");";
            break
        case "15":
            Blockly.Arduino.setups_["serial_begin"]="Serial3.begin(" + dropdown_speed + ");";
            break
	}
  return ""
};
Blockly.Arduino["serial_read"]=function(block){
    var code="Serial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_line"]=function(block){
    var code='"\\n"';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_tab"]=function(block){
    var code='" ; "';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_available"]=function(block){
    var code="Serial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.print(" + content + ");\n"
};
Blockly.Arduino["serial_write_line"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.println(" + content + ");\n"
};
Blockly.Arduino["serial_flush"]=function(block){
    return "Serial.flush();\n"
};
Blockly.Arduino["soft_init"]=function(block){
    var dropdown_pin1=block.getFieldValue("PIN1");
    var dropdown_pin2=block.getFieldValue("PIN2");
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_ss"]="SoftwareSerial mySerial(" + dropdown_pin1 + "," + dropdown_pin2 + ");";
    Blockly.Arduino.setups_["setup_sserial"]="mySerial.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["soft_read"]=function(block){
    var code="mySerial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["soft_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerial.write(" + content + ");\n"
};
Blockly.Arduino["soft_write_line"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerial.println(" + content + ");\n"
};
Blockly.Arduino["soft_available"]=function(block){
    var code="mySerial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
/*  wifi  */
Blockly.Arduino['esp8266_init']=function(block){
	var mode=block.getFieldValue("clientserveur");
	var adressage=block.getFieldValue("staticdynamic");
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("PASSWORD");
    var carte = localStorage.getItem('card');
//	Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>";
	if (adressage=="static"){
		var ipabc=block.getFieldValue("IPa")+","+block.getFieldValue("IPb")+","+block.getFieldValue("IPc");
		var ipd=block.getFieldValue("IPd");
		var passerelle=block.getFieldValue("GATEWAY");
		var masque=block.getFieldValue("MASKa")+","+block.getFieldValue("MASKb")+","+block.getFieldValue("MASKc")+","+block.getFieldValue("MASKd");
		Blockly.Arduino.definitions_["esp8266"] = 'IPAddress ip('+ipabc+','+ipd+');\nIPAddress gateway('+ipabc+','+passerelle+');\nIPAddress subnet('+masque+');\n';
		Blockly.Arduino.setups_["esp8266"] = 'Serial.begin(115200);\nWiFi.disconnect();\n  delay(2500);\n  WiFi.config(ip, gateway, subnet);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) {\nSerial.println(\".\");\n delay(250); };\n'+
        "  Serial.println();\nSerial.print(\"Conectado a:\\t\");\nSerial.println(WiFi.SSID());\nSerial.print(\"IP address:\\t\");\nSerial.println(WiFi.localIP());\n";
	} else {
		Blockly.Arduino.definitions_["esp8266"] = "";
		Blockly.Arduino.setups_["esp8266"] = 'Serial.begin(115200);\nWiFi.disconnect();\n  delay(2500);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED)\n { Serial.println(\".\");\ndelay(250); }\n'+
        "Serial.println();\nSerial.print(\"Conectado a:\\t\");\nSerial.println(WiFi.SSID());\nSerial.print(\"IP address:\\t\");\nSerial.println(WiFi.localIP());\n";

	}
	if (mode=="server"){
       
      //  console.log(carte);
		var port=Blockly.Arduino.valueToCode(block, "V0", Blockly.Arduino.ORDER_ATOMIC);
        if (carte=='esp8266'){
        Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>\n#include<ESP8266WebServer.h>\n";
		Blockly.Arduino.definitions_["esp8266"] = 'ESP8266WebServer server(' + port + ');\n';
		Blockly.Arduino.setups_["esp8266"] ='Serial.begin(115200);\nWiFi.disconnect();\n  delay(2500);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED)\n { Serial.println(\".\");\ndelay(250); }\n'+
        "Serial.println();\nSerial.print(\"Conectado a:\\t\");\nSerial.println(WiFi.SSID());\nSerial.print(\"IP address:\\t\");\nSerial.println(WiFi.localIP());\n"+
        "server.begin("+port+");\n";
        }
        if (carte=='esp32'){
        Blockly.Arduino.includes_["esp32"] = "#include <WiFi.h>\n#include<WebServer.h>\n";
            Blockly.Arduino.definitions_["esp32"] = 'WebServer server(' + port + ');\n';
            Blockly.Arduino.setups_["esp32"] = '  server.begin();\n';    
        }
        var code="server.handleClient();";
        return code;
	} else {
        if (carte=='esp8266'){
            Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>\n#include <ESP8266HTTPClient.h>\n#include<WiFiClient.h>\n";
            Blockly.Arduino.definitions_["esp8266"] += 'WiFiClient client;\nString payload;\nHTTPClient http;\n';
          //  Blockly.Arduino.setups_["esp8266"] = '  WiFiClient client;\n HTTPClient http;\n';   
        }
        if (carte=='esp32'){
            Blockly.Arduino.includes_["esp32"] = "#include <WiFi.h>\n#include <HTTPClient.h>\n#include<WiFiClient.h>\n\String payload;\nHTTPClient http;\n";
        }
	}
	return "" ;
};
Blockly.Arduino['esp8266_AP']=function(block){
    var carte = localStorage.getItem('card');
	var vSsid=block.getFieldValue("SSID");
	var vPassword=block.getFieldValue("PASSWORD");
    var vPort=block.getFieldValue("PORT");
if (carte=='esp8266'){
	Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>\n#include<ESP8266WebServer.h>\n";
}
if (carte=='esp32'){
    Blockly.Arduino.includes_["esp32"] = "#include <WiFi.h>\n#include<WebServer.h>\n";

}
    Blockly.Arduino.definitions_["esp8266"]='const char ssid[]=\"'+vSsid+'\";\n const char password[]=\"'+vPassword+'\";\n'+
    'ESP8266WebServer server(80);\n';
	Blockly.Arduino.setups_["esp8266"]='delay(1000);\nSerial.begin(115200);\n Serial.println();\nserver.begin();\n'+
    'Serial.print("Configuring access point...");\nWiFi.mode(WIFI_AP);\nWiFi.softAP(ssid, password);\nIPAddress myIP = WiFi.softAPIP();\n'+
    'Serial.print("AP IP address: ");\nSerial.println(myIP);\n';
   var code='';
	
	return code ;
};
Blockly.Arduino['esp8266_send']=function(block){
	//var data=Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
	var pagina=block.getFieldValue('text');
    var direccion=block.getFieldValue('address');
    var ordenes=Blockly.Arduino.statementToCode(block, "ORDERS");
/*     Blockly.Arduino.definitions_["esp8266_server"]='String damePagina="";\nvoid handleRoot(){\n'
  +"server.send(200,\"text/html\",damePagina);\n}\n";
  Blockly.Arduino.setups_["esp8266_server"]='server.on(\"/\",handleRoot);\n'; */
  Blockly.Arduino.definitions_["esp8266_server"+pagina]='void serve'+pagina+'() {\n'
  +"server.send(200,\"text/html\",p"+pagina+"());\n"+ordenes+"\n}\n";
 // Blockly.Arduino.setups_["esp8266_server"]='server.on(\"/\",handleRoot);\n';
  Blockly.Arduino.setups_["esp8266_query"+pagina]='server.on(\"/'+direccion+'\",serve'+pagina+');\n';

 // var code='damePagina=p'+pagina+'();\nserver.handleClient();\n';
  //var code="server.send(200,\"text/html\","+pagina+"());\n";
  var code='';
    return code;
};
Blockly.Arduino['esp8266_html']=function(block){
	var htmlhead=block.getFieldValue("HEAD");
	var htmlbody=Blockly.Arduino.statementToCode(block, "BODY");
    Blockly.Arduino.definitions_["esp8266_pag"+htmlhead] ='String p'+htmlhead+'(){\nString cadena=(String) R\"=====(\n'
    +'<!DOCTYPE HTML>\n'
    +' <html>\n<head><title>'+htmlhead+'</title></head>\n<body>\n'
    +htmlbody
    +'\n</body>\n</html>\n'
    +')=====\";\n return cadena;\n}\n ';
   
	return ''
};
Blockly.Arduino['esp8266_start']=function(block){
    var code=''
};
Blockly.Arduino['esp8266_wait_server']=function(block){
	return 'WiFiClient client = server.available();\nif (!client) return;\nwhile (!client.available()) { delay(1); }\nchar request = client.read();\nclient.flush();\n'
};
Blockly.Arduino['esp8266_wait_client']=function(block){
	var host=Blockly.Arduino.valueToCode(block, "host", Blockly.Arduino.ORDER_ATOMIC);
	var port=Blockly.Arduino.valueToCode(block, "port", Blockly.Arduino.ORDER_ATOMIC);
    var carte = localStorage.getItem('card');
    var code='';
    if (carte=='esp8266'){
        code='if (http.begin(client,'+host+','+port+')){\n'+
        'int httpCode=http.GET();\nif(httpCode>0){\nif (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {\n'+
        ' payload = http.getString();}\n}\nhttp.end();\n}\n';
    }
    if (carte=='esp32'){
        code='http.begin('+host+','+port+');\nint httpCode = http.GET();\n  if(httpCode > 0) {\nif(httpCode == HTTP_CODE_OK) {\npayload = http.getString();\n}\n}\nhttp.end();\n';
    }
	return code;
};
Blockly.Arduino['esp8266_useresponse']=function(block){
    //var arg=Blockly.Arduino.valueToCode(block,"arg",Blockly.Arduino.ORDER_ATOMIC);
	
    var code='payload';
return [code,Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["esp8266_request_find"]=function(block){
    var n=0;
    var argument=block.getFieldValue("CASE0");
  //  var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
    Blockly.Arduino.setups_["esp8266_query"+argument]='server.on(\"/'+argument+'\",HTTP_GET,GET'+argument+');\n';


  //  Blockly.Arduino.includes_["esp8266query"]='void GET'+argument+'(){\n'+branch+'\n}\n'; 
    var codigo='void GET'+argument+'(){\n'+branch+'\n'; 
	//var code='if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n';
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        codigo += 'if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n'
    }
    codigo+='}\n';
    Blockly.Arduino.includes_["esp8266query"+argument]=codigo;
 
	return ''
};
Blockly.Arduino['esp8266_getArg']=function(block){
	var arg=block.getFieldValue("arg");
    var code="String "+arg+"=server.arg(\""+arg+"\");\n"
return code;
};
Blockly.Arduino['esp8266_useArg']=function(block){
    //var arg=Blockly.Arduino.valueToCode(block,"arg",Blockly.Arduino.ORDER_ATOMIC);
	var arg=block.getFieldValue("arg");
    var code=arg;
return [code,Blockly.Arduino.ORDER_ATOMIC];
};
/* Values casting */
Blockly.Arduino["cast_int"]= function(block) {
    var valor=Blockly.Arduino.valueToCode(block,"valor");
    var target=block.getFieldValue("tipo");
    var code='';
    if (target=="int"){
        code=valor+'.toInt()'
    }
    if (target=="float"){
        code=valor+'.toFloat()'
    }

	
	
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/*  bluetooth  */
Blockly.Arduino["bluetooth_init"]=function(block){
    var dropdown_pin1=Blockly.Arduino.valueToCode(block,"PIN1", Blockly.Arduino.ORDER_NONE);
    var dropdown_pin2=Blockly.Arduino.valueToCode(block,"PIN2", Blockly.Arduino.ORDER_NONE);
    var dropdown_speed=block.getFieldValue("SPEED");
    var n=0;
	Blockly.Arduino.includes_["bluetooth"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["bluetooth"]="SoftwareSerial bluetooth("+dropdown_pin1+","+dropdown_pin2+");";
	Blockly.Arduino.setups_["bluetooth"]="bluetooth.begin(" + dropdown_speed + ");";
	return ""
};
Blockly.Arduino["bluetooth_a"]=function(block){
    var value_data_s=Blockly.Arduino.valueToCode(block, "data_s", Blockly.Arduino.ORDER_NONE);
    return "if (bluetooth.available() > 0) {\n  bluetooth.write(" + value_data_s + ");\n}\n"
};
Blockly.Arduino["bluetooth_b"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
    var code="if (bluetooth.available() > 0) {\n  char dataR=bluetooth.read();\n  if (dataR == " + argument + ") {\n  " + branch + "  }\n";
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += "  if (dataR == " + argument + ") {\n  " + branch + "  }\n"
    }
    code += "}\n"
	return code
};
/*  structure  */
Blockly.Arduino["base_setup_loop"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    var loop=Blockly.Arduino.statementToCode(block, "LOOP");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key]=code;
    return [loop, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["base_loop"]=function(block){
    function statementToCodeNoTab(block, name) {
        var targetBlock=block.getInputTargetBlock(name);
        var code=Blockly.Arduino.blockToCode(targetBlock);
        if (!goog.isString(code)) throw 'Expecting code from statement block "' + targetBlock.type + '".';
        return code
    }
    var loopBranch=statementToCodeNoTab(block, "LOOP");
    return loopBranch
};
Blockly.Arduino["base_define"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_[setup_key]=code;
    return ""
};
Blockly.Arduino["base_code"]=function(block){
    return block.getFieldValue("TEXT") + "\n"
};
Blockly.Arduino["base_end"]=function(block){
    return "while(true);\n"
};
Blockly.Arduino["base_begin"]=function(block){
    return ""
};
Blockly.Arduino['base_code_entree']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
/*  temps  */
Blockly.Arduino["inout_pulsein"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="pulseIn(" + dropdown_pin + "," + dropdown_stat + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["millis"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
        case "u":
            var code="micros()";
            break;
        case "m":
            var code="millis()";
            break;
        case "s":
            code="1000*millis()";
            break
	}
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["chrono"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
        case "u":
            var code="start-micros()";
            break;
        case "m":
            var code="start-millis()";
            break;
        case "s":
            code="start-1000*millis()";
            break
	}
    return [code, Blockly.Arduino.ORDER_SUBTRACTION]
};
Blockly.Arduino["millis_start"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
        case "u":
            var code="unsigned long start = micros();\n";
            break;
        case "m":
            var code="unsigned long start = millis();\n";
            break;
        case "s":
            code="unsigned long start = 1000*millis();\n";
            break
	}
    return code
};
Blockly.Arduino["base_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
    switch (_u) {
        case "u":
            var code="delayMicroseconds(" + delay_time + ");\n";
            break;
        case "m":
            var code="delay(" + delay_time + ");\n";
            break;
        case "s":
            code="delay(" + delay_time + "*1000);\n";
            break
    };
    return code
};
Blockly.Arduino["tempo_sans_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
	var faire=Blockly.Arduino.statementToCode(block, "branche");
	var temps="temps"+delay_time;
	Blockly.Arduino.definitions_["temporisation"+delay_time]="unsigned long "+temps+"=0 ;";
    switch (_u) {
        case "u":
            var code="if ((micros()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=micros();\n"+faire+"}\n";
            break;
        case "m":
            var code="if ((millis()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=millis();\n"+faire+"}\n";
            break;
        case "s":
            code="if ((millis()-"+temps+")>=" + delay_time + "*1000) {\n  "+temps+"=millis();\n"+faire+"}\n";
            break
    };
    return code
};
/*  entree sortie  */
Blockly.Arduino["inout_attachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	var dropdown_mode=block.getFieldValue('mode');
	var funcName='interrupt_'+dropdown_pin;
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+','+funcName+','+dropdown_mode+');';
	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_[funcName] ='void ' + funcName + '() {\n' + branch + '}';
	return "";
};
Blockly.Arduino["inout_detachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	return 'detachInterrupt('+dropdown_pin+');\n';
};
Blockly.Arduino["inout_digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code="digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
    return code
};
Blockly.Arduino["inout_digital_read"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["digital_read"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (pull_up) {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);"
    };
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_analog_write"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code="analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["inout_analog_read"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_angle_maths"]=function(block){
    var angle=block.getFieldValue("ANGLE");
    return [angle, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["toggle"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_["toggle"+dropdown_pin]="boolean state_" + dropdown_pin + "=LOW;";
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", state_" + dropdown_pin + ");\nstate_"+ dropdown_pin + "=!state_"+ dropdown_pin + ";\n";
};
/*  stockage  */
Blockly.Arduino['eeprom_write'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"]='#include <EEPROM.h>';
	return 'EEPROM.write('+adresse+','+valeur+');\n';
};
Blockly.Arduino['eeprom_read'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"]='#include <EEPROM.h>';
return ['EEPROM.read('+adresse+')', Blockly.Arduino.ORDER_ATOMIC];
};
