#include "Arduino.h"
#include "Encoder.h"
    Encoder::Encoder(int pinEncoderI, int pinEncoderD, float dia) {//constructor del objeto encoder, se ejecuta cuando se crea el objeto, se le pasa parámetros de pin sensor izdo, pin sensor dcho y diámetro de rueda en cm
     intPinI=pinEncoderI;
     intPinD=pinEncoderD;
     diametro=dia;
     ISRCounterI=0;
     ISRCounterD=0;
     startTimeI=0;
     startTimeD=0;
     pinMode(intPinI, INPUT_PULLUP);
     pinMode(intPinD, INPUT_PULLUP);
     attachInterrupt(digitalPinToInterrupt(intPinI), debounceCountI, RISING);
     attachInterrupt(digitalPinToInterrupt(intPinD), debounceCountD, RISING);
     }
    
    void Encoder::debounceCountI() {//función que se ejecuta cuando se dispara la interrupción del sensor izdo
     if (micros() - startTimeI > timeThreshold)
  	{
    	ISRCounterI++;
    	startTimeI = micros();
  	}
    }
 
       void Encoder::debounceCountD() {//función que se ejecuta cuando se dispara la interrupción del sensor dcho
     if (micros() - startTimeD > timeThreshold)
  	{
    	ISRCounterD++;
    	startTimeD = micros();
  	}
    }
   
    int Encoder::getCountI() {//devuelve el nº de tics del sensor izdo
    	return ISRCounterI;
    }
 
     int Encoder::getCountD() {//devuelve el nº de tics del sensor dcho
    	return ISRCounterD;
    }   

    float Encoder::getLapsI() {//devuelve el nº de vueltas que da la rueda izda
    	return getCountI()/20.0; 
    }
    
    float Encoder::getLapsD() {//devuelve el nº de vueltas que da la rueda dcha
    	return getCountD()/20.0; 
    }
    
   float Encoder::getDistanceI() {//devuelve la distancia de la rueda izda
    	return getLapsI()*PI*diametro; 
    }	    

    float Encoder::getDistanceD() {//devuelve la distancia de la rueda dcha
    	return getLapsD()*PI*diametro; 
    }
     
    int Encoder::getAngleI() {//devuelve el ángulo girado por la rueda izda
    	return getCountI()*18; 
    }
  
    int Encoder::getAngleD() {//devuelve el ángulo girado por la rueda dcha
    	return getCountD()*18; 
    }
    
    bool Encoder::loopLapI (float nlap) {//indica cuando la rueda izda da un nº de vueltas indicado
	if (getLapsI()<nlap) {
	 return false;	
	   }
	 return true;
	} 
	
    bool Encoder::loopLapD (float nlap) {//indica cuando la rueda dcha da un nº de vueltas indicado
	if (getLapsD()<nlap) {
	 return false;
	   }
	   return true;
	}
	
    void Encoder::loopLap (float nlap) {//indica cuando ambas ruedas da un nº de vueltas indicado
	while (not loopLapI (nlap) || not loopLapD (nlap)) {
	
	 }
	
	}
	
    bool Encoder::loopDistanceI (float distance) {//indica cuando la rueda izda recorre una distancia indicada
	if (getDistanceI()<distance) {
	 return false;	
	   }
	 return true;
	} 
	
    bool Encoder::loopDistanceD (float distance) {//indica cuando la rueda dcha recorre una distancia indicada
	if (getDistanceD()<distance) {
	 return false;
	   }
	   return true;
	}
	
    void Encoder::loopDistance (float distance) {////indica cuando ambas ruedas recorre una distancia indicada
	while (not loopDistanceI (distance) || not loopDistanceD (distance)) {
	
	 }
	
	}
	 		    
    bool Encoder::loopAngleI (int angle) {//indica cuando la rueda izda gira un ángulo indicado
	if (getAngleI()<angle) {
	 return false;
	   }
	 return true;
	}
	
    bool Encoder::loopAngleD (int angle) {//indica cuando la rueda dcha gira un ángulo indicado
	if (getAngleD()<angle) {
	 return false;
	   }
	  return true;
	}
	
    void Encoder::loopAngle (int angle) {//indica ambas ruedas gira un ángulo indicado
	while (not loopAngleI (angle) || not loopAngleD (angle)) {
	
	 }
	} 		   
     
    
