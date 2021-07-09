#include <Masaylo.h>
Masaylo m;

//no hay definiciones


void setup() {
  m.init();
}

void loop() {
  m.adelante();
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.atras();
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.derecha();
  delay(1*1000);
  m.alto();
  delay(1*1000);
  m.izquierda();
  delay(1*1000);
  m.alto();
  delay(1*1000);

}