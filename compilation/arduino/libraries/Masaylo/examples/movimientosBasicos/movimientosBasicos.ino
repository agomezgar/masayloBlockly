#include<Masaylo.h>
Masaylo m;

void setup() {
  // Inicializamos el Masaylo:
m.init(5,6,9,10);
//Las funciones de movimiento son: adelante(), atras(), izquierda(), derecha() y alto()
m.adelante();
delay(2000);
m.izquierda();
delay(1000);
m.atras();
delay(2000);
m.derecha();
delay(1000);
m.alto();

}

void loop() {

}
