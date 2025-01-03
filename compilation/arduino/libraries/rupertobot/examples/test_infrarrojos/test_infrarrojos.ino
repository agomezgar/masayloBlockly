/*
  Test de infrarrojos by Antonio Gómez

  Comprueba el funcionamiento de los sensores de infrarrojos del rupertobot. 
  Normalmente, el sensor derecho se conecta a la patilla A0
  (o 14, si se usa como digital) y el izquierdo a la A1
  (o 15 digital).
  Vuelca el programa y pon en marcha el monitor serie, 
  a 9600 baudios. Rupertobot indicará sus lecturas en 
  ambos sensores.
  https://agomezgar.github.io/rupertobot

  created 18 Apr
  by Antonio Gómez

*/

#include <rupertobot.h>
//Declaramos a nuestro robot como ruperto y dos variables que recogerán 
//las lecturas IR
rupertobot ruperto;
bool bd,bi=false;

void setup() {

  Serial.begin(9600);
  //Inicializamos sensores IR
  ruperto.IR(14,15);

Serial.print("Versión de ruperti: ");
Serial.println(ruperto.version());
}

void loop() {

Serial.print ("IR: ");
//Volcamos las lecturas en ambas variables
bd=ruperto.blancoDerecha();
bi=ruperto.blancoIzquierda();
if (bd){
  Serial.print("Blanco a la derecha, ");
}
  else{
    Serial.print("Negro a la derecha, ");
  }

if (bi){
  Serial.println("Blanco a la izquierda, ");
}
  else{
    Serial.println("Negro a la izquierda, ");
  }
delay(100);
}
