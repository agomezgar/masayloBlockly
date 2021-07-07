#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6, 7, 8, 11, 12, 13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines de lectores de infrarrojos: izda A0 (14) y dcha A1 (15)
  m.infrarrojos(14, 15);

}

void loop() {
  //Declaramos un valor int que recoge las lecturas
  int lectura = leeSuelo();
  /* La variable lectura nos dice qué hacer:
      0: Vamos bien. Ambos sensores leen blanco
      1: El sensor izquierdo "pisa la línea". Compensar a la izquierda
      2: El sensor derecho "pisa la línea". Compensar a la derecha
      3: Ambos sensores leen negro. Error. Parar.
  */
  switch (lectura) {
    case 0:
      m.adelante(150);
      break;
    case 1:
      m.izquierda(150);
      break;
    case 2:
      m.derecha(150);
      break;
    case 3:
      m.alto();
      break;
  }
}

int leeSuelo() {
  //Variable local que recoge la lectura de los sensores
  int valor = 0;
  if (m.nIzquierda(1)) {
    valor += 1;
  }
  if (m.nDerecha(1)) {
    valor += 2;
  }
  return valor;
}
