#include <Masaylo.h>
Masaylo m;


//no hay definiciones


void setup() {
  m.init(6,7,8,11,12,13);
  m.encoders(2,3,7.5);
}

void loop() {
  for (int count=0 ; count<4 ; count++) {
    m.adelante();
    m.distancia(20);
    m.alto();
    delay(1*1000);
    m.derecha();
    m.angulo(90);
    m.alto();
    delay(1*1000);
  }

}