const int timeThreshold = 500;
const int intPin = 2;
volatile int ISRCounter = 0;
int counter = 0;
long startTime = 0;


void setup()
{
  pinMode(intPin, INPUT_PULLUP);
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(intPin), debounceCount, RISING);
}

void loop()
{
  if (counter != ISRCounter)
  {
    counter = ISRCounter;
    Serial.print("nº de pulsos:");
    Serial.print(counter);
    Serial.print(" nº de vuelta:");
    Serial.print(counter/20.0);
    Serial.print(" angulo girado:");
    Serial.println(counter*18);
  }
}

void debounceCount()
{
  if (micros() - startTime > timeThreshold)
  {
    ISRCounter++;
    startTime = micros();
  }
}
