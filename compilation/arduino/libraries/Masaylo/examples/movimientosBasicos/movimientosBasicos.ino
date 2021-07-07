#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(), atras(), izquierda(), derecha() y alto()
  m.adelante();
  delay(500);
  m.izquierda();
  delay(500);
  m.atras();
  delay(500);
  m.derecha();
  delay(500);
  m.alto();
}

void loop() {
}
