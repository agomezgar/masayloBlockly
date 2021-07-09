#include <Masaylo.h>
 Masaylo m;


//no hay definiciones



void setup() {
  m.init();
  m.ultrasonidos(16,17);
  Serial.begin(9600);
}

void loop() {
  Serial.println((String("Distancia (cm):") + String(m.distancia())));
  delay(1*1000);

}