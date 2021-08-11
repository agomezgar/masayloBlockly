#include <Masaylo.h>
Masaylo m;
void setup() {
  //Declaramos un robot de clase Masaylo e inicializamos US
m.init(5,6,9,10);
m.ultrasonidos(7,8);
}

void loop() {
  //Medimos la distancia a un posible obstáculo
long espacio=m.distancia();
//Regulamos la velocidad según la distancia o retrocedemos
if (espacio>40){
  m.adelante(150);
}else if (espacio>20){
  m.adelante(130);
}else{
  m.alto();
  //Damos tiempo al paro
  delay(500);
  m.atras();
  delay(1000);
  m.izquierda(150);
  delay(500);
}
}
