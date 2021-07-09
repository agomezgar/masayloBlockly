#include <Masaylo.h>
Masaylo m;

int giro;

//no defs

long random_int(int a,int b) {
  if (a > b) {
    int c = a;
    a = b;
    b = c;
  }
  return random(a,b);
}
//no hay definiciones


void setup() {
  m.init(6,7,8,11,12,13);
  m.ultrasonidos(16,17);
  randomSeed(analogRead(0));
}

void loop() {
  m.adelante(191); // FORWARD
  if (m.distancia() <= 40) {
    giro = random_int(0, 2);
    m.alto();
    delay(1*1000);
    if (giro == 0) {
      m.izquierda(191); // LEFT
      delay(0.5*1000);
    } else {
      m.derecha(191); // RIGHT
      delay(0.5*1000);
    }
  }

}