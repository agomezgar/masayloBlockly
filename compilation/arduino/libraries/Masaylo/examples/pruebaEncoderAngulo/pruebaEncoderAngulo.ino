#include <Masaylo.h>
Masaylo m;

void setup() {
  // put your setup code here, to run once:
  //Serial.begin (9600);
  m.encoders(2, 3, 7);//sensor izdo a pin 2, sensor dcho pin 3, diametro de rueda 7 cm
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(), atras(), izquierda(), derecha() y alto()
  Serial.begin (9600);
  
}

void loop() {//indica en puerto serie cada vez que da cualquiera de las ruedas una vuelta completa
  // put your main code here, to run repeatedly:
m.angulo(360);
Serial.println ("360 grados");

}
