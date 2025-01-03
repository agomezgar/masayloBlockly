/*
  Test de ultrasonidos by Antonio Gómez

  Comprueba el funcionamiento del sensor de ultrasonidos del rupertobot. 
  Normalmente, la patilla TRIG se conecta al pin digital 10 y la patilla
  ECHO al pin digital 11.
  Vuelca el programa y pon en marcha el monitor serie, 
  a 9600 baudios. Rupertobot indicará la distancia en cm al obstáculo
  que detecte.
  https://agomezgar.github.io/rupertobot

  created 18 Apr
  by Antonio Gómez

*/

#include <rupertobot.h>
//Declaramos a nuestro robot como ruperto y dos variables que recogerán 
//las lecturas IR
rupertobot ruperto;

float distancia;
void setup() {

  Serial.begin(9600);
  //Inicializamos sensor de ultrasonidos para detectar distancia
  ruperto.us(10,11);

Serial.print("Versión de ruperti: ");
Serial.println(ruperto.version());
}

void loop() {

Serial.print ("IR: ");
//Volcamos las lectura en la variable
distancia=ruperto.distancia();

Serial.print("Distancia detectada: ");
Serial.println(distancia);
delay(100);

}
