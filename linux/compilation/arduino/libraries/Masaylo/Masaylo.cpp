#include "Arduino.h"
#include "Masaylo.h"
void Masaylo::init(int MIA,int MIB,int MDA,int MDB)
{
pinMode(MIA,OUTPUT);
pinMode(MIB,OUTPUT);
pinMode(MDA, OUTPUT);
pinMode(MDB, OUTPUT);
_MIA=MIA;
_MIB=MIB;
_MDA=MDA;
_MDB=MDB;

}

void Masaylo::adelante(){
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
}
void Masaylo::atras(){
digitalWrite(_MIB,HIGH);
digitalWrite(_MIA,LOW);
digitalWrite(_MDB,HIGH);
digitalWrite(_MDA,LOW);
}
void Masaylo::izquierda(){
digitalWrite(_MIA,LOW);
digitalWrite(_MIB,LOW);
digitalWrite(_MDA,HIGH);
digitalWrite(_MDB,LOW);
}
void Masaylo::derecha(){
digitalWrite(_MIA,HIGH);
digitalWrite(_MIB,LOW);
digitalWrite(_MDA,LOW);
digitalWrite(_MDB,LOW);
}
void Masaylo::alto(){
digitalWrite(_MIB,LOW);
digitalWrite(_MIA,LOW);
digitalWrite(_MDB,LOW);
digitalWrite(_MDA,LOW);
}
void Masaylo::adelante(int v){
analogWrite(_MIA,v);
digitalWrite(_MIB,LOW);
analogWrite(_MDA,v);
digitalWrite(_MDB,LOW);
}
void Masaylo::atras(int v){
analogWrite(_MIB,v);
digitalWrite(_MIA,LOW);
analogWrite(_MDB,v);
digitalWrite(_MDA,LOW);
}
void Masaylo::izquierda(int v){
digitalWrite(_MIA,LOW);
digitalWrite(_MIB,LOW);
analogWrite(_MDA,v);
digitalWrite(_MDB,LOW);
}
void Masaylo::derecha(int v){
analogWrite(_MIA,v);
digitalWrite(_MIB,LOW);
digitalWrite(_MDA,LOW);
digitalWrite(_MDB,LOW);
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
//Lectura de infrarrojos (negro=1, blanco=0)
bool Masaylo::nIzquierda(){
bool negro;
if (digitalRead(_IRI)==HIGH){
negro=true;
}else{
negro=false;
}
return negro;
}

bool Masaylo::nDerecha(){
bool negro;
if (digitalRead(_IRD)==HIGH){
negro=true;
}else{
negro=false;
}
return negro;
}

bool Masaylo::bIzquierda(){
bool blanco;
if (digitalRead(_IRI)==HIGH){
blanco=false;
}else{
blanco=true;
}
return blanco;
}

bool Masaylo::bDerecha(){
bool blanco;
if (digitalRead(_IRD)==HIGH){
blanco=false;
}else{
blanco=true;
}
return blanco;
}
//Medición de distanciapor ultrasonidos
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
