#include <Masaylo.h>
Masaylo m;

const int timeThreshold = 500;
const int intPin = 2;
volatile int ISRCounter = 0;
int counter = 0;
long startTime = 0;


void setup()
{
  pinMode(intPin, INPUT_PULLUP);
  //Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(intPin), debounceCount, RISING);
  m.init(6,7,8,11,12,13); //Motor izdo:pines 7,8 para control de giro y 6 control pwm, Motor dcho:pines 12,13 para control de giro y 11 pwm
  //Las funciones de movimiento son: adelante(velocidad), atras(velocidad), izquierda(velocidad), derecha(velocidad) y alto()
  //La velocidad puede modularse entre los valores 120 (prácticamente parado) a 255 (velocidad máxima)
}

void loop()
{
  while (ISRCounter < 40) {
    m.adelante(140);
  }
  m.alto();

  /*if (counter != ISRCounter)
    {
    counter = ISRCounter;
    Serial.print("nº de pulsos:");
    Serial.print(counter);
    Serial.print(" nº de vuelta:");
    Serial.print(counter/40.0);
    Serial.print(" angulo girado:");
    Serial.println(counter*9);
    }*/
}

void debounceCount()
{
  if (micros() - startTime > timeThreshold)
  {
    ISRCounter++;
    startTime = micros();
  }
}
