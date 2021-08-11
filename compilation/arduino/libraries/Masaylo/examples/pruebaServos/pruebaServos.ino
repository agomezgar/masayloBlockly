#include <Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(7, 8, 6, 12, 13, 11); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines del sensor de ultrasonidos: A2 (16)trigger y A3 (17) echo
  m.servos(5, 4); //configura servos de cabeza y brazo respectivamente
  m.girabrazo (10);
  delay (1000);
  m.girabrazo (170);
  // m.giracabeza (170);
 //delay (1000);
  /*for (int n = 10; n < 180; n = n + 10) {
    m.giracabeza(n);
    //delay (1000);
    //m.giracabeza(20);
    //delay (1000);
  }*/

}

void loop() {


}
