#include "Arduino.h"
#include "Encoder.h"
#include "Masaylo.h"
#include "Servo.h"

void Masaylo::init(int MIP=6,int MIA=7,int MIB=8,int MDP=11,int MDA=12,int MDB=13)//cambios añadiendo los pines de control de velocidad
{
pinMode(MIA,OUTPUT);
pinMode(MIB,OUTPUT);
pinMode(MDA, OUTPUT);
pinMode(MDB, OUTPUT);
_MIA=MIA;
_MIB=MIB;
_MIP=MIP;
_MDA=MDA;
_MDB=MDB;
_MDP=MDP;
}

//Procedimientos poniendo control de velocidad con pines ENA y ENB y velocidad por defecto 255
void Masaylo::alto(){//paro de motor activo, si lo ponemos todo LOW las bobinas se desactivan y llevan inercia, de esta manera ayudan al paro
digitalWrite(_MIB,HIGH);
digitalWrite(_MIA,HIGH);
digitalWrite(_MDB,HIGH);
digitalWrite(_MDA,HIGH);
}
void Masaylo::adelante(int v=255){
analogWrite (_MIP,v);
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
}
void Masaylo::atras(int v=255){
analogWrite (_MIP,v);
digitalWrite(_MIB,HIGH);
digitalWrite(_MIA,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDB,HIGH);
digitalWrite(_MDA,LOW);
}
void Masaylo::izquierda(int v=255){//pivotar izda con dos motores
analogWrite (_MIP,v);
digitalWrite(_MIA,LOW);
digitalWrite(_MIB,HIGH);
analogWrite (_MDP,v);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
}
void Masaylo::derecha(int v=255){//pivotar dcha con dos motores
analogWrite (_MIP,v);
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDA,LOW);
digitalWrite(_MDB,HIGH);
}

void Masaylo::ultrasonidos(int t=16, int e=17){
_trig=t;
_echo=e;
pinMode(_trig,OUTPUT);
pinMode(_echo,INPUT);
}
void Masaylo::irIzq(int i=14){
_IRI=i;
pinMode(_IRI,INPUT);
}
void Masaylo::irDer(int d=15){
_IRD=d;
pinMode(_IRD,INPUT);
}
void Masaylo::infrarrojos(int i=14, int d=15){
_IRI=i;
_IRD=d;
pinMode(_IRI,INPUT);
pinMode(_IRD,INPUT);
}
//Lectura de infrarrojos tipo 1 (negro=1, blanco=0), tipo 0 (negro=0, blanco=1), por defecto está el tipo 1
bool Masaylo::nIzquierda(int t=1){
bool negro=false;
if (digitalRead(_IRI)==HIGH){
	if (t==1) {negro=true;}
}

else {//estoy en caso de LOW
	if (t==0){negro=true;}
}
return negro;
}

bool Masaylo::nDerecha(int t=1){
bool negro=false;
if (digitalRead(_IRD)==HIGH){
	if (t==1) {negro=true;}
}

else {//estoy en caso de LOW
	if (t==0){negro=true;}
}
return negro;
}


bool Masaylo::bIzquierda(int t=1){
bool blanco= not nIzquierda(t);
return blanco;
}

bool Masaylo::bDerecha(int t=1){
bool blanco= not nDerecha(t);
return blanco;
}

//Medición de distancia por ultrasonidos
long Masaylo::distancia(){
long espacio;
long tiempo;
digitalWrite(_trig,LOW);
delayMicroseconds(4);
digitalWrite(_trig,HIGH);
delayMicroseconds(10);
digitalWrite(_trig,LOW);
tiempo=pulseIn(_echo,HIGH);
espacio=tiempo/58.309037901;
return espacio;

}

void Masaylo::encoders(int i=2, int d=3, float diametro=7.8){//función que define los pines de los encoders (pines de interrupciones) y el diámetro de la rueda en cm
_ENI=i;
_END=d;
_DIA=diametro;
}

void Masaylo::vueltas (float vueltas) {//función que indica cuando cualquiera de las ruedas da el nº de vueltas indicado
Encoder miEncoder (_ENI, _END, _DIA);
miEncoder.loopLap(vueltas);
}

void Masaylo::distancia (float distancia) {//función que indica cuando cualquiera de las ruedas recorre una distancia indicada
Encoder miEncoder (_ENI, _END, _DIA);
miEncoder.loopDistance(distancia);
}

void Masaylo::angulo (float angulo) {//función que indica cuando cualquiera de las ruedas gira unos grados indicados
Encoder miEncoder (_ENI, _END, _DIA);
miEncoder.loopAngle (angulo);
}

void Masaylo::servos(int c=5,int b=4) {
servocabeza.attach(c);
servobrazo.attach(b);
}
void Masaylo::giracabeza (int g) {
servocabeza.write (g);
delay (100);
}

void Masaylo::girabrazo (int g) {
servobrazo.write (g);
delay (100);
}

/*
buzzer procedimiento para indicar el pin al que se conecta un zumbador
*/
void Masaylo::buzzer(int pin=18){
	_buzz=pin;
	pinMode(_buzz,OUTPUT);
}

/*
tono procedimiento para indicar la frecuencia y duración del sonido del zumbador
*/
void Masaylo::tono(int frequency, int time){
	tone(_buzz, frequency,time);
	delay(time);
	noTone(_buzz);
}

