#include <Masaylo.h>
Masaylo m;

const int do2 = 261;
const int re = 293;
const int mi = 329;
const int fa = 349;
const int sol = 392;
const int la = 440;
const int si = 493;
const int duracion = 500;
const int retardo = 100;

//no hay definiciones


void setup() {
  m.init();
  m.buzzer(1);

}

void loop() {
  m.tono(do2,duracion);
  delay(retardo);
  m.tono(re,duracion);
  delay(retardo);
  m.tono(mi,duracion);
  delay(retardo);
  m.tono(fa,duracion);
  delay(retardo);
  m.tono(sol,duracion);
  delay(retardo);
  m.tono(la,duracion);
  delay(retardo);
  m.tono(si,duracion);
  delay(retardo);

}
