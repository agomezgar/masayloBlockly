/*
  Encoder.h - Library for control of the Masaylo robot.
  Created by Maribel Ruiz y Pedro Ruiz, may 03, 2021.
  Released into the public domain.
*/

#ifndef Encoder_h
#define Encoder_h
#include "Arduino.h"
 
static const int timeThreshold=500;//tiempo en micros entre lecturas de encoder 
volatile static int ISRCounterI;//contador de interrupciones izdo
volatile static int ISRCounterD;//contador de interrupciones dcho
static long startTimeI;//tiempo de inicio para sensor izdo
static long startTimeD;//tiempo de inicio para sensor izdo

class Encoder
{

  public:
    Encoder(int pinEncoderI, int pinEncoderD, int dia);//objeto encoder
    static int getCountI();//función que devuelve el contador de sensor izdo
    static int getCountD();//función que devuelve el contador de sensor dcho
    float getLapsI();//función que devuelve el nº de vueltas de sensor izdo
    float getLapsD();//función que devuelve el nº de vueltas de sensor dcho
    float getDistanceI();//función que devuelve la distancia recorrida por rueda izda
    float getDistanceD();//función que devuelve la distancia recorrida por rueda dcha
    int getAngleI();//función que devuelve el ángulo girado por rueda izda
    int getAngleD();//función que devuelve el ángulo girado por rueda dcha
    bool loopLapI(float nlap);//función que avisa cuando las rueda izda da un nº de vueltas pasado
    bool loopLapD(float nlap);//función que avisa cuando las rueda dcha da un nº de vueltas pasado
    void loopLap (float nlap);////función que avisa cuando una de las ruedas da un nº de vueltas pasado
    bool loopDistanceI (float distance);//función que avisa cuando las rueda izda recorre una distancia pasada
    bool loopDistanceD (float distance);//función que avisa cuando las rueda dcha recorre una distancia pasada
    void loopDistance (float distance);//función que avisa cuando una de las ruedas recorre una distancia pasada
    bool loopAngleI(int angle);//función que avisa cuando las rueda izda gira un ángulo pasado
    bool loopAngleD(int angle);//función que avisa cuando las rueda dcha gira un ángulo pasado
    void loopAngle(int angle);//función que avisa cuando una de las ruedas gira un ángulo pasado
    
    
   private:
    int intPinI;//variable que define el pin del sensor izdo
    int intPinD;//variable que define el pin del sensor dcho
    int diametro;//variable que define el diámetro de la rueda
    static void debounceCountI();//función que se llama en la interrupción del sensor izdo
    static void debounceCountD();//función que se llama en la interrupción del sensor dcho
 };
 
 
 
#endif
