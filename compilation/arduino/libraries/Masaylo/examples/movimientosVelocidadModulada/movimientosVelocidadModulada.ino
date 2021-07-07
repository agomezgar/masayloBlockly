#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(velocidad), atras(velocidad), izquierda(velocidad), derecha(velocidad) y alto()
  //La velocidad puede modularse entre los valores 120 (prácticamente parado) a 255 (velocidad máxima)
  m.adelante(255);
  delay(2000);
  m.adelante(200);
  delay(2000);
  m.adelante(150);
  delay(2000);
  m.adelante(100);
  delay(2000);
  m.alto();
  delay(2000);
  m.atras(100);
  delay(2000);
  m.atras(150);
  delay(2000);
  m.atras(200);
  delay(2000);
  m.atras(255);
  delay(2000);
  m.alto();
}

void loop() {

}
