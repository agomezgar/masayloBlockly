#include<Masaylo.h>
Masaylo m;

void setup() {
  // Inicializamos el Masaylo:
m.init(5,6,9,10);
//Activamos lectores de infrarrojos:
m.infrarrojos(2,3);
}

void loop() {
  //Declaramos un valor int que recoge las lecturas 
int lectura=leeSuelo();
/* La variable lectura nos dice qué hacer:
 *  0: Vamos bien. Ambos sensores leen blanco 
 *  1: El sensor izquierdo "pisa la línea". Compensar a la izquierda
 *  2: El sensor derecho "pisa la línea". Compensar a la derecha 
 *  3: Ambos sensores leen negro. Error. Parar.
 */
  switch (lectura){
    case 0:
    m.adelante(130);
    break;
    case 1:
    m.izquierda(150);
    break;
    case 2:
    m.derecha(150);
    break;
    case 3:
    m.alto();
    break;
  }
}


int leeSuelo(){
  //Variable local que recoge la lectura de los sensores
  int valor=0; 
if (m.nIzquierda()){
valor+=1;
}
if (m.nDerecha()){
  valor+=2;
}
return valor;
}

