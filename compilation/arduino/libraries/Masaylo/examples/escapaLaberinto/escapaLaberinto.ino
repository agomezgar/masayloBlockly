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
  cabeza.write(90);//partimos de posición central
  //Medimos la distancia a un posible obstáculo
  long d_frente = m.distancia();
  Serial.println (d_frente);
  if (d_frente > 20) {
    m.adelante();
  }

  else {
    m.alto();
    m.atras ();
    delay (1000);
    m.alto();
    cabeza.write (10);//giramos la cabeza 80º a dcha
    delay (1000);
    long d_dcha = m.distancia();
    cabeza.write (170);//giramos la cabeza 80º a izda
    delay (1000);
    long d_izda = m.distancia();

    if (d_dcha > d_izda) {
      m.derecha(200);
      delay (150);
    }
    else {
      m.izquierda(200);
      delay (150);
    }

    cabeza.write(90);//partimos de posición central
    delay (1000);

  }

}
