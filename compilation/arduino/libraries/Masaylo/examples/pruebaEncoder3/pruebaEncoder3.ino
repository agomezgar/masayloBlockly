#include <Masaylo.h>
Masaylo m;

void setup() {
  // put your setup code here, to run once:
  //Serial.begin (9600);
  m.encoders(2, 3, 7);//sensor izdo a pin 2, sensor dcho pin 3, diametro de rueda 7 cm
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(), atras(), izquierda(), derecha() y alto()
  
  for (int n = 0; n < 4; n++) {//describe un cuadrado
    m.adelante (120);
    m.distancia (10);
    m.alto();
    delay (1000);
    m.derecha(120);
    m.angulo (90);
    m.alto();
    delay (1000);
  }

}

void loop() {
  // put your main code here, to run repeatedly:


}
