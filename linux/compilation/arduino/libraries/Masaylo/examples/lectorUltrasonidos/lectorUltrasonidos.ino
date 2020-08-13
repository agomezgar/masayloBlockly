#include<Masaylo.h>
Masaylo m;

void setup() {
  // Inicializamos el Masaylo:
m.init(5,6,9,10);
//Activamos sensor de ultrasonidos:
m.ultrasonidos(7,8);
//Activamos el puerto serie
Serial.begin(9600);

}

void loop() {
  // La distancia medida por el HC-SR04 se remitirá en cm mediante una variable de tipo long
 long espacio=m.distancia();
Serial.print("Distancia: ");
Serial.println(espacio);
delay(500);
}
