/*
  Masaylo.h - Library for control of the Masaylo robot.
  Created by Antonio Gomez Garcia, june 30, 2020.
  Released into the public domain.
*/
#ifndef Masaylo_h
#define Masaylo_h
 
#include "Arduino.h"
 
class Masaylo
{
  public:
    void init(int MIA,int MIB,int MDA,int MDB);
    void BT(int tx, int rx);
    void ultrasonidos(int t, int e);
    void irIzq(int i);
    void irDer(int d);
    void infrarrojos(int i,int d);
    void adelante();
    void adelante(int v);
    void atras();
    void atras(int v);
    void izquierda();
    void izquierda(int v);
    void derecha();
    void derecha(int v);
    void alto();
    long distancia();
    bool nIzquierda();
    bool nDerecha();
    bool bIzquierda();
    bool bDerecha();

  private:
    int _MIA;
    int _MIB;
    int _MDA;
    int _MDB;
    int _trig;
    int _echo;
    int _IRI;
    int _IRD;
};
 
#endif
