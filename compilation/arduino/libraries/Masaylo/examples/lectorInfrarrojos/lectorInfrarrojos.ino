#include<Masaylo.h>

Masaylo m;//definimos objeto m de tipo Masaylo
boolean izquierda, derecha;

void setup() {
  // Inicializamos los motores de Masaylo:
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Asignamos los pines de lectores de infrarrojos: izda A0 (14) y dcha A1 (15)
  m.infrarrojos(14, 15);
  //Activamos el puerto serie
  Serial.begin(9600);

}

void loop() {
  // Asignamos a las variables izquierda y derecha la lectura de las funciones nIzquierda y nDerecha (true para negro, false para blanco):
  izquierda = m.nIzquierda(1);
  derecha = m.nDerecha(1);
  Serial.print("Izquierda: ");

  if (izquierda) {
    Serial.print("negro");
  } else {
    Serial.print("blanco");
  }
  Serial.print("\t");
  Serial.print("Derecha: ");
  if (derecha) {
    Serial.println("negro");
  } else {
    Serial.println("blanco");
  }
  delay(100);
}
