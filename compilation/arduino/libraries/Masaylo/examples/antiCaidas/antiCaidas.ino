#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo
boolean izquierda, derecha;
int velocidad = 100;

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines de lectores de infrarrojos: izda A0 (14) y dcha A1 (15)
  m.infrarrojos(14, 15);
  m.encoders(2, 3, 7);//sensor izdo a pin 2, sensor dcho pin 3, diametro de rueda 7 cm
}

void loop() {
  // Asignamos a las variables izquierda y derecha la lectura de las funciones nIzquierda y nDerecha (true para negro, false para blanco):
  izquierda = m.nIzquierda(1);
  derecha = m.nDerecha(1);
  m.adelante (velocidad);
  delay (1000);
  if (izquierda) {
    m.derecha (velocidad);
    m.angulo(90);
    m.alto();
    delay (1000);
  }
  if (derecha) {
    m.izquierda (velocidad);
    m.angulo(90);
    m.alto();
    delay (1000);
  }
  if (derecha && izquierda) {
    m.atras (velocidad);
    m.distancia(20);
    delay (1000);
  }


}
