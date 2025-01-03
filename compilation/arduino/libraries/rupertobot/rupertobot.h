/*
Librería rupertobot por Antonio Gómez, basada en la librería escornabot de Prudencio Luna y Pedro Ruiz
V 1.0.0 (11/04/2024): Primera versión
*/

#ifndef rupertobot_h
#define rupertobot_h


// Descripción de la clase rupertobot
class rupertobot {
  //Definición de elementos públicos
  public:
  // constructor:
 	rupertobot();//sin pasar parámetros
	rupertobot(int kindStep);// pasa el tipo de paso 1 (un sola bobina a la vez), paso 2 (dos bobinas a la vez)
	// procedimiento para mover los motores:
	void avanza(float laps, int speed);
	void atras(float laps, int speed);
	void avanzacm(float cm, int speed);
	void atrascm(float cm, int speed);
	void derecha(float laps,int speed);
	void izquierda (float laps, int speed);
	void giraDerecha(float grados, int speed);
	void giraIzquierda(float grados, int speed);
	void alto();

	//procedimiento que devuelve la versión de la librería
	float version();

	//procedimiento que configura los pines de los sensores infrarrojos
	void IR(int izq,int der);
	//procedimiento que configura los pines del sensor de ultrasonidos
	void us(int trig, int echo);
	//procedimiento que devuelve la distancia en cm del sensor de ultrasonidos
	long distancia();
	//procedimiento que nos devuelve true o false si el sensor de ir derecho está a negro
	bool negroDerecha();
	//procedimiento que nos devuelve true o false si el sensor de ir izquierdo está a negro
	bool negroIzquierda();
	//procedimiento que nos devuelve true o false si el sensor de ir derecho está a blanco
	bool blancoDerecha();
	//procedimiento que nos devuelve true o false si el sensor de ir izquierdo está a blanco
	bool blancoIzquierda();
	//procedimiento para indicar el pin al que se conecta un zumbador	
	void zumbador(int pin);
	//procedimiento para indicar la frecuencia y duración del sonido del zumbador
	void tono(int frequency, int time);

  //Definición de elementos privados
  private:
int _trig;
int _echo;
int _IRR;
int _IRL;
int _buzz;

  protected:
};

#endif //rupertobot_h
