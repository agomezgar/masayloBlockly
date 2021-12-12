if [ $2 = "esp8266" ];
then
./arduino-cli upload --port $1 --fqbn esp8266:esp8266:nodemcuv2 sketch
elif [ $2 = "esp32" ];
then
./arduino-cli upload --port $1 --fqbn esp32:esp32:wrover sketch
elif [ $2 = "nanooptiboot" ];
then
./arduino-cli upload --port $1 --fqbn arduino:avr:nano sketch
elif [ $2 =  "nano" ];
then
  ./arduino-cli upload --port $1 --fqbn arduino:avr:nano:cpu=atmega328old sketch
else
  ./arduino-cli upload --port $1 --fqbn arduino:avr:$2 sketch
fi


