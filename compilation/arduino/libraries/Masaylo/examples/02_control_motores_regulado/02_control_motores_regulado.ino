#include <Masaylo.h>
Masaylo m;

//no defs

//no hay definiciones


void setup() {
  m.init(6,7,8,11,12,13);
}

void loop() {
  m.adelante(127); // FORWARD
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.atras(127); // BACKWARD
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.derecha(127); // RIGHT
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.izquierda(127); // LEFT
  delay(1*1000);
  m.alto();
  delay(1*1000);

}