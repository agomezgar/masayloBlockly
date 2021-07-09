#include <Masaylo.h>
Masaylo m;


long distancia_dcha = 0;
long distancia_izda = 0;
long distancia_frente = 0;

//no defs

//no hay definiciones


void setup() {
  m.init(6, 7, 8, 11, 12, 13);
  m.ultrasonidos(16, 17);
  m.servos(5, 4);
}

void loop() {
  m.giracabeza(90);
  distancia_frente = m.distancia();
  if (distancia_frente >= 30) {
    m.adelante(255); // FORWARD
  } else {
    m.alto();
    delay(1 * 1000);
    m.giracabeza(10);
    delay(1 * 1000);
    distancia_dcha = m.distancia();
    m.giracabeza(170);
    delay(1 * 1000);
    distancia_izda = m.distancia();
    if (distancia_dcha > distancia_izda) {
      m.derecha(255); // RIGHT
      delay(0.5 * 1000);
      m.alto();
    } else {
      m.izquierda(255); // LEFT
      delay(0.5 * 1000);
      m.alto();
    }
    m.giracabeza(90);
    delay(1 * 1000);
  }

}
