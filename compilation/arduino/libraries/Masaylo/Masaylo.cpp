#include "Arduino.h"
#include "Encoder.h"
#include "Masaylo.h"
#if defined(ARDUINO_ARCH_ESP32)
 #include "ESP32Servo.h"
 #else
 #include "Servo.h"
 #endif
 #if defined(ARDUINO_ARCH_ESP8266)
#define _nodemcu true
 #else
#define _nodemcu false
 #endif

void Masaylo::init(int MIP, int MIA, int MIB, int MDP, int MDA, int MDB)
{

if (_nodemcu)	{
	_MDP=5;
	_MDA=0;
	_MIP=4;
	_MIA=2;
	pinMode(_MIA,OUTPUT);
pinMode(_MDA,OUTPUT);

}else{
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
}


//Procedimientos poniendo control de velocidad con pines ENA y ENB y velocidad por defecto 255
void Masaylo::alto(){//paro de motor activo, si lo ponemos todo LOW las bobinas se desactivan y llevan inercia, de esta manera ayudan al paro
if (!_nodemcu){
digitalWrite(_MIB,HIGH);
digitalWrite(_MIA,HIGH);
digitalWrite(_MDB,HIGH);
digitalWrite(_MDA,HIGH);
}else{
	digitalWrite(_MIP,LOW);
	digitalWrite(_MIA,LOW);
	digitalWrite(_MDP,LOW);
	digitalWrite(_MDA,LOW);
}
}
void Masaylo::adelante(int v){
if(!_nodemcu){
analogWrite (_MIP,v);
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
	
}else {

analogWrite (_MIP,v*4);
digitalWrite(_MIA,HIGH);
analogWrite (_MDP,v*4);
digitalWrite(_MDA,HIGH);
	
}
}
void Masaylo::atras(int v){
if (!_nodemcu){
analogWrite (_MIP,v);
digitalWrite(_MIB,HIGH);
digitalWrite(_MIA,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDB,HIGH);
digitalWrite(_MDA,LOW);
}else {
analogWrite (_MIP,v*4);
digitalWrite(_MIA,LOW);
analogWrite (_MDP,v*4);
digitalWrite(_MDA,LOW);
}
}
void Masaylo::izquierda(int v){//pivotar izda con dos motores
if (!_nodemcu){
analogWrite (_MIP,v);
digitalWrite(_MIA,LOW);
digitalWrite(_MIB,HIGH);
analogWrite (_MDP,v);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
}else{
analogWrite (_MIP,v*4);
digitalWrite(_MIA,LOW);
analogWrite (_MDP,v*4);
digitalWrite(_MDA,HIGH);
}
}
void Masaylo::derecha(int v){//pivotar dcha con dos motores
if (!_nodemcu){
analogWrite (_MIP,v);
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
analogWrite (_MDP,v);
digitalWrite(_MDA,LOW);
digitalWrite(_MDB,HIGH);
}else{
analogWrite (_MIP,v*4);
digitalWrite(_MIA,HIGH);
analogWrite (_MDP,v*4);
digitalWrite(_MDA,LOW);

}
}

void Masaylo::ultrasonidos(int t, int e){
_trig=t;
_echo=e;
pinMode(_trig,OUTPUT);
pinMode(_echo,INPUT);
}
void Masaylo::irIzq(int i){
_IRI=i;
pinMode(_IRI,INPUT);
}
void Masaylo::irDer(int d){
_IRD=d;
pinMode(_IRD,INPUT);
}
void Masaylo::infrarrojos(int i, int d){
_IRI=i;
_IRD=d;
pinMode(_IRI,INPUT);
pinMode(_IRD,INPUT);
}
//Lectura de infrarrojos tipo 1 (negro=1, blanco=0), tipo 0 (negro=0, blanco=1), por defecto está el tipo 1
bool Masaylo::nIzquierda(int t){
bool negro=false;
if (digitalRead(_IRI)==HIGH){
	if (t==1) {negro=true;}
}

else {//estoy en caso de LOW
	if (t==0){negro=true;}
}
return negro;
}

bool Masaylo::nDerecha(int t){
bool negro=false;
if (digitalRead(_IRD)==HIGH){
	if (t==1) {negro=true;}
}

else {//estoy en caso de LOW
	if (t==0){negro=true;}
}
return negro;
}


bool Masaylo::bIzquierda(int t){
bool blanco= not nIzquierda(t);
return blanco;
}

bool Masaylo::bDerecha(int t){
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

void Masaylo::encoders(int i, int d, float diametro){//función que define los pines de los encoders (pines de interrupciones) y el diámetro de la rueda en cm
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

void Masaylo::servos(int c,int b) {
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
void Masaylo::buzzer(int pin){
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

