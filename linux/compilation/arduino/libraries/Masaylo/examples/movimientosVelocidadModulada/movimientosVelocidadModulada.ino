#include<Masaylo.h>
Masaylo m;

void setup() {
  // Inicializamos el Masaylo:
m.init(5,6,9,10);
//Las funciones de movimiento son: adelante(velocidad), atras(velocidad), izquierda(velocidad), derecha(velocidad) y alto()
//La velocidad puede modularse entre los valores 120 (prácticamente parado) a 255 (velocidad máxima)
m.adelante(255);
delay(2000);
m.adelante(200);
delay(2000);
m.adelante(150);
delay(2000);
m.adelante(100);
delay(2000);
m.alto();
delay(2000);
m.atras(100);
delay(2000);
m.atras(150);
delay(2000);
m.atras(200);
delay(2000);
m.atras(255);
delay(2000);
m.alto();

}

void loop() {

}
