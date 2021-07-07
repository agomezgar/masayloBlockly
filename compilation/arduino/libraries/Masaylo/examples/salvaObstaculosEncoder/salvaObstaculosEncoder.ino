#include <Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6, 7, 8, 11, 12, 13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(velocidad), atras(velocidad), izquierda(velocidad), derecha(velocidad) y alto()
  //Asignamos los pines del sensor de ultrasonidos: A2 (16)trigger y A3 (17) echo
  m.ultrasonidos(16, 17);
  m.encoders(2, 3, 7);
}

void loop() {
  //Medimos la distancia a un posible obstáculo
  long espacio = m.distancia();
  //Regulamos la velocidad según la distancia o retrocedemos
  if (espacio > 60) {
    m.adelante(255);
  } else if (espacio > 40) {
    m.adelante(200);
  } else {
    m.alto();
    delay (1000);
    //Damos tiempo al paro
    m.atras(255);
    m.distancia(100);
    m.alto();
    delay (1000);
    m.izquierda(255);
    m.angulo(180);
    m.alto();
    //delay (1000);
  }
}
