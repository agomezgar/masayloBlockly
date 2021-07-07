#include <Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

long sentidoGiro = 1; //1 izda y 2 decha

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
  m.adelante(127);
  if (espacio < 20) {
    m.alto();
    delay (500);
    m.atras(127);
    m.distancia(10);
    m.alto();
    delay (500);
    sentidoGiro = random (1, 2);
    if (sentidoGiro == 1) {
      m.izquierda(127);
    }
    else {
      m.derecha(127);
    }

    m.angulo(120);
    m.alto();
    delay (500);
  }
}
