#include <Masaylo.h>
Masaylo m;

//no defs

//no hay definiciones


void setup() {
  m.init(6,7,8,11,12,13);
  m.ultrasonidos(16,17);
}

void loop() {
  m.adelante(191); // FORWARD
  if (m.distancia() <= 40) {
    m.alto();
    delay(1*1000);
    m.izquierda(191); // LEFT
    delay(0.5*1000);
  }

}