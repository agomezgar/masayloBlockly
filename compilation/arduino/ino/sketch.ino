#include <Masaylo.h>
Masaylo m;

//no hay definiciones

//no defs


void setup() {
  m.init(5,6,9,10);
}

void loop() {
  m.adelante(); // FORWARD
  delay(5*1000);
  m.atras(); // BACKWARD
  delay(5*1000);
  m.alto(); //STOP
  while(true);

}