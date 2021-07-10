/*
  Masaylo.h - Library for control of the Masaylo robot.
  Created by Antonio Gomez Garcia, june 30, 2020.
  Released into the public domain.
*/
/*
Modificaciones Maribel Ruiz y Pedro Ruiz 25/05/2021
*/
#ifndef Masaylo_h
#define Masaylo_h
 
#include "Arduino.h"
//#include "Encoder.h"
#include "Servo.h"
 
class Masaylo
{
  
  public:
    void init(int MIP=6,int MIA=7,int MIB=8,int MDP=11,int MDA=12,int MDB=13);//se añaden los pines ENA y ENB 
    void BT(int tx, int rx);
    void ultrasonidos(int t=16, int e=17);
    void irIzq(int i=14);
    void irDer(int d=15);
    void infrarrojos(int i=14,int d=15);
    //void adelante();
    void adelante(int v=255);
    //void atras();
    void atras(int v=255);
    //void izquierda();
    void izquierda(int v=255);
    //void derecha();
    void derecha(int v=255);
    void alto();
    long distancia();
    bool nIzquierda(int t=1);
    bool nDerecha(int t=1);
    bool bIzquierda(int t=1);
    bool bDerecha(int t=1);
    void encoders(int i=2,int d=3, float diametro=7.8);
    void vueltas(float vueltas);
    void distancia (float distancia);
    void angulo (float angulo);
    void servos(int c=5,int b=4);
    void giracabeza (int g);
    void girabrazo (int g);
    //procedimiento para indicar el pin al que se conecta un zumbador	
    void buzzer(int pin=18);
    //procedimiento para indicar la frecuencia y duración del sonido del zumbador
    void tono(int frequency, int time);

  private:
    int _MIA;
    int _MIB;
    int _MIP;
    int _MDA;
    int _MDB;
    int _MDP;
    int _trig;
    int _echo;
    int _IRI;
    int _IRD;
    int _ENI;//pin sensor izdo encoder
    int _END;//pin sensor dcho encoder
    float _DIA;//diámetro
    int _buzz;
    Servo servocabeza;
    Servo servobrazo;
 };
 
#endif
