#include <Masaylo.h>
 Masaylo m;


//no hay definiciones


void setup() {
  Serial.begin(9600);
  m.init();
  m.infrarrojos(14,15);
}

void loop() {
  if ((m.nIzquierda()) & (m.bDerecha())) {
    Serial.println("Izdo: Negro, Dcho: blanco");
  } else if ((m.bIzquierda()) & (m.nDerecha())) {
    Serial.println("Izdo: Blanco, Dcho: Negro");
  } else if ((m.nIzquierda()) & (m.nDerecha())) {
    Serial.println("Lado oscuro de la fuerza");
  } else {
    Serial.println("La fuerza está en ti");
  }
  delay(1*1000);

}