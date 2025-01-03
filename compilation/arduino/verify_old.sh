if [ $1 = "esp8266" ];
then 
./arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 sketch
elif [ $1 = "esp32" ];
then 
./arduino-cli compile --fqbn esp32:esp32:wrover sketch

elif [ $1 = "nanooptiboot" ];
then
./arduino-cli compile --fqbn arduino:avr:nano sketch
elif [ $1 =  "nano" ];
then
  ./arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328old sketch

else
./arduino-cli compile --fqbn arduino:avr:$1 sketch
fi
