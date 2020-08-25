
void obstacleDetector() {
  int distance = Otto.getDistance();
  if (distance < 15) obstacleDetected = true;
  else obstacleDetected = false;
}


void receiveStop() {
  sendAck();
  Otto.home();
  sendFinalAck();
}


void receiveLED() {

  
  sendAck();
  Otto.home();
  
  
  unsigned long int matrix;
  char *arg;
  char *endstr;
  arg = SCmd.next();
  
  if (arg != NULL) {
    matrix = strtoul(arg, &endstr, 2); 
    Otto.putMouth(matrix, false);
  }
  else {
    Otto.putMouth(xMouth);
    delay(2000);
    Otto.clearMouth();
  }
  sendFinalAck();
}


void recieveBuzzer() {
  
  sendAck();
  Otto.home();

  bool error = false;
  int frec;
  int duration;
  char *arg;

  arg = SCmd.next();
  if (arg != NULL) frec = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) duration = atoi(arg);  
  else error = true;
  if (error == true) {
    Otto.putMouth(xMouth);
    delay(2000);
    Otto.clearMouth();
  }
  else Otto._tone(frec, duration, 1);
  sendFinalAck();
}


'void receiveTrims() {
  
  sendAck();
  Otto.home();
  int trim_YL, trim_YR, trim_RL, trim_RR;

  
  
  
  
  bool error = false;
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) trim_YL = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) trim_YR = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) trim_RL = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) trim_RR = atoi(arg);  
  else error = true;
  if (error == true) {
    Otto.putMouth(xMouth);
    delay(2000);
    Otto.clearMouth();

  } else { 
    Otto.setTrims(trim_YL, trim_YR, trim_RL, trim_RR);
    Otto.saveTrimsOnEEPROM(); 
  }
  sendFinalAck();
}'


void receiveServo() {
  sendAck();
  moveId = 30;

  
  
  
  
  bool error = false;
  char *arg;
  int servo_YL, servo_YR, servo_RL, servo_RR;

  arg = SCmd.next();
  if (arg != NULL) servo_YL = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) servo_YR = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) servo_RL = atoi(arg);  
  else error = true;

  arg = SCmd.next();
  if (arg != NULL) {
    servo_RR = atoi(arg);  
  }
  else error = true;
  if (error == true) {
    Otto.putMouth(xMouth);
    delay(2000);
    Otto.clearMouth();
  }
  else { 
    int servoPos[4] = {servo_YL, servo_YR, servo_RL, servo_RR};
    Otto._moveServos(200, servoPos);   
  }
  sendFinalAck();
}


void receiveMovement() {
  sendAck();
  if (Otto.getRestState() == true) Otto.setRestState(false);

  
  
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) moveId = atoi(arg);
  else {
    Otto.putMouth(xMouth);
    delay(2000);
    Otto.clearMouth();
    moveId = 0; 
  }
  arg = SCmd.next();
  if (arg != NULL) T = atoi(arg);
  else T = 1000;
  arg = SCmd.next();
  if (arg != NULL) moveSize = atoi(arg);
  else moveSize = 15;
}


void move(int moveId) {
  bool manualMode = false;

  switch (moveId) {
    case 0:
      Otto.home();
      break;
    case 1: 
      Otto.walk(1, T, 1);
      break;
    case 2: 
      Otto.walk(1, T, -1);
      break;
    case 3: 
      Otto.turn(1, T, 1);
      break;
    case 4: 
      Otto.turn(1, T, -1);
      break;
    case 5: 
      Otto.updown(1, T, moveSize);
      break;
    case 6: 
      Otto.moonwalker(1, T, moveSize, 1);
      break;
    case 7: 
      Otto.moonwalker(1, T, moveSize, -1);
      break;
    case 8: 
      Otto.swing(1, T, moveSize);
      break;
    case 9: 
      Otto.crusaito(1, T, moveSize, 1);
      break;
    case 10: 
      Otto.crusaito(1, T, moveSize, -1);
      break;
    case 11: 
      Otto.jump(1, T);
      break;
    case 12: 
      Otto.flapping(1, T, moveSize, 1);
      break;
    case 13: 
      Otto.flapping(1, T, moveSize, -1);
      break;
    case 14: 
      Otto.tiptoeSwing(1, T, moveSize);
      break;
    case 15: 
      Otto.bend(1, T, 1);
      break;
    case 16: 
      Otto.bend(1, T, -1);
      break;
    case 17: 
      Otto.shakeLeg(1, T, 1);
      break;
    case 18: 
      Otto.shakeLeg(1, T, -1);
      break;
    case 19: 
      Otto.jitter(1, T, moveSize);
      break;
    case 20: 
      Otto.ascendingTurn(1, T, moveSize);
      break;
    default:
      manualMode = true;
      break;
  }
  if (!manualMode) sendFinalAck();
}


void receiveGesture() {
  
  sendAck();
  Otto.home();

  
  
  int gesture = 0;
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) gesture = atoi(arg);
  else     delay(2000); 

  switch (gesture) {
    case 1: 
      Otto.playGesture(OttoHappy);
      break;
    case 2: 
      Otto.playGesture(OttoSuperHappy);
      break;
    case 3: 
      Otto.playGesture(OttoSad);
      break;
    case 4: 
      Otto.playGesture(OttoSleeping);
      break;
    case 5: 
      Otto.playGesture(OttoFart);
      break;
    case 6: 
      Otto.playGesture(OttoConfused);
      break;
    case 7: 
      Otto.playGesture(OttoLove);
      break;
    case 8: 
      Otto.playGesture(OttoAngry);
      break;
    case 9: 
      Otto.playGesture(OttoFretful);
      break;
    case 10: 
      Otto.playGesture(OttoMagic);
      break;
    case 11: 
      Otto.playGesture(OttoWave);
      break;
    case 12: 
      Otto.playGesture(OttoVictory);
      break;
    case 13: 
      Otto.playGesture(OttoFail);
      break;
    default:
      break;
  }
  sendFinalAck();
}


void receiveSing() {
  
  sendAck();
  Otto.home();

  
  
  int sing = 0;
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) sing = atoi(arg);
  else     delay(2000); 

  switch (sing) {
    case 1: 
      Otto.sing(S_connection);
      break;
    case 2: 
      Otto.sing(S_disconnection);
      break;
    case 3: 
      Otto.sing(S_surprise);
      break;
    case 4: 
      Otto.sing(S_OhOoh);
      break;
    case 5: 
      Otto.sing(S_OhOoh2);
      break;
    case 6: 
      Otto.sing(S_cuddly);
      break;
    case 7: 
      Otto.sing(S_sleeping);
      break;
    case 8: 
      Otto.sing(S_happy);
      break;
    case 9: 
      Otto.sing(S_superHappy);
      break;
    case 10: 
      Otto.sing(S_happy_short);
      break;
    case 11: 
      Otto.sing(S_sad);
      break;
    case 12: 
      Otto.sing(S_confused);
      break;
    case 13: 
      Otto.sing(S_fart1);
      break;
    case 14: 
      Otto.sing(S_fart2);
      break;
    case 15: 
      Otto.sing(S_fart3);
      break;
    case 16: 
      Otto.sing(S_mode1);
      break;
    case 17: 
      Otto.sing(S_mode2);
      break;
    case 18: 
      Otto.sing(S_mode3);
      break;
    case 19: 
      Otto.sing(S_buttonPushed);
      break;
    default:
      break;
  }
  sendFinalAck();
}


void receiveMode() {
  sendAck();
  Otto.home();
  
  
  int modeId = 0; 
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) modeId = atoi(arg);
  else     delay(2000);
  
  switch (modeId) {
    case 0: 
    Otto.putMouth(0);
    Otto.sing(S_cuddly);
    Otto.home();
      break;
    case 1: 
    Otto.putMouth(one);
     randomDance = random(5, 21); 
      if ((randomDance > 14) && (randomDance < 19)) {
        randomSteps = 1;
        T = 1600;
      }
      else {
        randomSteps = random(3, 6); 
        T = 1000;
      }
      Otto.putMouth(random(10, 21));
      for (int i = 0; i < randomSteps; i++) move(randomDance);
      break;
    case 2: 
      Otto.putMouth(two);
      break;
    case 3: 
      Otto.putMouth(three);
      break;
    case 4: 
      Otto.putMouth(four);
  if (Otto.getBatteryLevel() < 35) {
    Otto.putMouth(thunder);
    Otto.bendTones (880, 2000, 1.04, 8, 3);  
    delay(30);
    Otto.bendTones (2000, 880, 1.02, 8, 3);  
    delay(30);
    Otto.bendTones (880, 2000, 1.04, 8, 3);  
    delay(30);
    Otto.bendTones (2000, 880, 1.02, 8, 3);  
    Otto.clearMouth();
    matrix = 0b00001100010010010010010010011110; 
     Otto.putMouth(matrix, false);
    delay(2000);
    Otto.clearMouth();
     delay(1000);
    matrix = 0b00001100010010010010010010011110; 
    Otto.putMouth(matrix, false);
    delay(2000);
    Otto.clearMouth();
    Otto.putMouth(happyOpen);
  }    
      break;
    default:
      break;
  }
  sendFinalAck();
}


void receiveName() {
  
  sendAck();
  Otto.home();
  char newOttoName[11] = "";  
  int eeAddress = 5;          
  char *arg;
  arg = SCmd.next();
  if (arg != NULL) {
    
    int k = 0;
    while ((*arg) && (k < 11)) {
      newOttoName[k] = *arg++;
      k++;
    }
    EEPROM.put(eeAddress, newOttoName);
  }
  else
  {
    
    delay(2000);
    
  }
  sendFinalAck();
}


void requestName() {
  Otto.home(); 
  char actualOttoName[11] = ""; 
  int eeAddress = 5;            
  
  EEPROM.get(eeAddress, actualOttoName);

  Serial.print(F("&&"));
  Serial.print(F("E "));
  Serial.print(actualOttoName);
  Serial.println(F("%%"));
  Serial.flush();
}


void requestDistance() {
  Otto.home();  
  int distance = Otto.getDistance();
  Serial.print(F("&&"));
  Serial.print(F("D "));
  Serial.print(distance);
  Serial.println(F("%%"));
  Serial.flush();
}


void requestNoise() {
  Otto.home();  
  int microphone = Otto.getNoise(); 
  Serial.print(F("&&"));
  Serial.print(F("N "));
  Serial.print(microphone);
  Serial.println(F("%%"));
  Serial.flush();
}


void requestBattery() {
  Otto.home();  
  
  double batteryLevel = Otto.getBatteryLevel();
  Serial.print(F("&&"));
  Serial.print(F("B "));
  Serial.print(batteryLevel);
  Serial.println(F("%%"));
  Serial.flush();
}


void requestProgramId() {
  Otto.home();   
  Serial.print(F("&&"));
  Serial.print(F("I "));
  Serial.print(programID);
  Serial.println(F("%%"));
  Serial.flush();
}


void sendAck() {
  delay(30);
  Serial.print(F("&&"));
  Serial.print(F("A"));
  Serial.println(F("%%"));
  Serial.flush();
}


void sendFinalAck() {
  delay(30);
  Serial.print(F("&&"));
  Serial.print(F("F"));
  Serial.println(F("%%"));
  Serial.flush();
}


void ButtonPushed(){ 
    if(!buttonPushed){
        buttonPushed=true;
        Otto.putMouth(smallSurprise);
    } 
} 
