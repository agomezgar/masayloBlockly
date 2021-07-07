#include <Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6, 7, 8, 11, 12, 13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines del sensor de ultrasonidos: 16 trigger y 17 echo
  m.ultrasonidos(16, 17);
}

void loop() {
  //Medimos la distancia a un posible obstáculo
  long espacio = m.distancia();
  //Regulamos la velocidad según la distancia o retrocedemos
  if (espacio > 40) {
    m.adelante(255);
  } else if (espacio > 20) {
    m.adelante(200);
  } else {
    m.alto();
    //Damos tiempo al paro
    delay(500);
    m.atras(255);
    delay(1000);
    m.izquierda(255);
    delay(500);
  }
}
