#include<Masaylo.h>
Masaylo m;
boolean izquierda, derecha;
void setup() {
  // Inicializamos el Masaylo:
m.init(5,6,9,10);
//Activamos lectores de infrarrojos:
m.infrarrojos(2,3);
//Activamos el puerto serie
Serial.begin(9600);

}

void loop() {
  // Asignamos a las variables izquierda y derecha la lectura de las funciones nIzquierda y nDerecha (true para negro, false para blanco):
  izquierda=m.nIzquierda();
  derecha=m.nDerecha();
Serial.print("Izquierda: ");

if (izquierda){
  Serial.print("negro");
}else{
  Serial.print("blanco");
}
Serial.print("\t");
Serial.print("Derecha: ");
if (derecha){
  Serial.println("negro");
}else{
Serial.println("blanco");
}
delay(100);
}
