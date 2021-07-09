#include <Masaylo.h>
Masaylo m;


int i;
int j;

//No defs

void setup() {
  m.init(6,7,8,11,12,13);
  m.ultrasonidos(16,17);
  m.servos(5,4);
}

void loop() {
  for (i=10 ; i<=170 ; i=i+10) {
    m.giracabeza(i);
  }
  j = 170;
  while (j >= 10) {
    m.giracabeza(j);
    j = j + -10;
  }

}