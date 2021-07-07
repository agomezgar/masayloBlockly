#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines del sensor de ultrasonidos: A2 (16)trigger y A3 (17) echo
  m.ultrasonidos(16, 17);
  //Activamos el puerto serie
  Serial.begin(9600);
}

void loop() {
  // La distancia medida por el HC-SR04 se remitirá en cm mediante una variable de tipo long
  long espacio = m.distancia();
  Serial.print("Distancia: ");
  Serial.println(espacio);
  delay(500);
}
