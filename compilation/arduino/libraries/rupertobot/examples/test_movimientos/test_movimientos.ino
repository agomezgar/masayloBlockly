/*
   by Antonio Gómez

  Comprueba el funcionamiento de los comandos de movimiento de tu
  rupertobot. Las órdenes avanza, atras, derecha e izquierda necesitan
  como parámetros el número de vueltas en cada rueda y la velocidad en
  rpm. Por el contrario, los comandos avanzacm, atrascm, giraIzquierda y
  giraDerecha necesitan como primer parámetro los cm o los grados, y como
  segundo parámetro, igualmente, la velocidad en rpm. El zumbador emitirá
  un pitido en cada cambio de movimiento.
  https://agomezgar.github.io/rupertobot

  created 18 Apr
  by Antonio Gómez

*/

#include <rupertobot.h>
//Declaramos a nuestro robot como ruperto y dos variables que recogerán 
//las lecturas IR
rupertobot ruperto;

void setup() {
//Inicializamos el buzzer en la patilla 12
ruperto.zumbador(12);

}

void loop() {
//Avanzo, giro y retrocedo hasta quedarme en el mismo sitio
ruperto.avanza(1,10);
ruperto.tono(1000,1000);
ruperto.izquierda(0.5,10);
ruperto.tono(1500,1000);
ruperto.atras(1,10);
ruperto.tono(1500,1000);
ruperto.derecha(1,10);
ruperto.tono(1000,1000);
ruperto.atras(1,10);
ruperto.tono(1500,1000);
ruperto.derecha(0.5,10);
ruperto.tono(1000,1000);
ruperto.avanza(1,10);
ruperto.tono(1500,1000);
ruperto.izquierda(1,1000);
ruperto.tono(500,2000);
delay(2000);
//Avanzo 20 cm, giro 90º a la derecha,180º a la izquierda,90º a la derecha
//de nuevo y retrocedo 20 cm para quedarme en la posición inicial
ruperto.avanzacm(20,10);
ruperto.tono(1000,1000);
ruperto.giraDerecha(90,10);
ruperto.tono(1500,1000);
ruperto.giraIzquierda(180,10);
ruperto.tono(1500,1000);
ruperto.giraDerecha(90,10);
ruperto.tono(1000,1000);
ruperto.atrascm(20,10);
ruperto.tono(1500,1000);
//Fin de programa
while(1);
}
