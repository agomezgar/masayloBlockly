/*
   by Antonio Gómez

   Aprende a programar tu rupertobot como siguelíneas. El circuito es
   una línea negra sobre fondo blanco. Si fuera al revés, tendrías que
   invertir la lógica del programa. 
   https://agomezgar.github.io/rupertobot

  created 18 Apr
  by Antonio Gómez

*/
#include <rupertobot.h>
  //Declaramos a nuestro robot como ruperto
  rupertobot ruperto;

void setup() {
  //Inicializamos sensores IR 
  ruperto.IR(14,15);
}

void loop() {
  //Se suponen tres casos: blanco a izquierda y derecha (avanza),
  //negro a izquierda y blanco a derecha (gira a la izquierda),
  //y blanco a izquierda y negro a derecha (gira a la derecha)
  if (ruperto.blancoDerecha()&&ruperto.blancoIzquierda()){

  ruperto.avanzacm(3,5);
  }else if (ruperto.blancoDerecha()&&ruperto.negroIzquierda()){
    ruperto.giraIzquierda(15,5);
  }
  else if (ruperto.negroDerecha()&&ruperto.blancoIzquierda()){
    ruperto.giraDerecha(15,5);
  }

}
