#include <Servo.h>
#include <Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo
Servo cabeza;

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(7, 8, 6, 12, 13, 11); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines del sensor de ultrasonidos: A2 (16)trigger y A3 (17) echo
  m.ultrasonidos(16, 17);
  cabeza.attach(5);//configura el pin del servo de la cabeza
  cabeza.write(90);
  Serial.begin (9600);
}

void loop() {
  cabeza.write(90);
  long d_frente = m.distancia();
  Serial.print ("distancia frente:");
  Serial.println (d_frente);

  if (d_frente < 20) {
    cabeza.write (10);
    delay (1000);
    long d_dcha = m.distancia();
    Serial.print ("distancia dcha:");
    Serial.println (d_dcha);
    cabeza.write (170);
    delay (1000);
    long d_izda = m.distancia();
    Serial.print ("distancia izda:");
    Serial.println (d_izda);
    cabeza.write(90);
    delay (1000);
  }


}
