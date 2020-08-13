#include <Arduino.h>
#line 1 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
#line 1 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
#include <Masaylo.h>
Masaylo m;

//no hay definiciones

//no defs


#line 9 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
void setup();
#line 13 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
void loop();
#line 9 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
void setup() {
  m.init(5,6,9,10);
}

void loop() {
  m.adelante(); // FORWARD
  delay(5*1000);
  m.atras(); // BACKWARD
  delay(5*1000);
  m.alto(); //STOP
  while(true);

}
