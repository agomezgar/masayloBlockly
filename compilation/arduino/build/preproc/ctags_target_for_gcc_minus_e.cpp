# 1 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
# 1 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino"
# 2 "D:\\Descargas\\dist\\win-ia32-unpacked\\compilation\\arduino\\ino\\sketch.ino" 2
Masaylo m;

//no hay definiciones

//no defs


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
