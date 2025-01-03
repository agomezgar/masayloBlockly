@echo off
echo %1
echo %2
echo %3
if  %2 == esp8266 (goto esp8266)
if  %2 == esp32 (goto esp32)
if  %2 == nanooptiboot (goto nanooptiboot)
if %2 == nano (goto nano)
goto common
:esp8266
arduino-cli upload --port %1 --fqbn esp8266:esp8266:nodemcuv2 %3
goto commonexit
:esp32
arduino-cli upload --port %1 --fqbn esp32:esp32:esp32wrover %3
goto commonexit
:nanooptiboot
arduino-cli upload --port %1 --fqbn arduino:avr:nano %3
goto commonexit
:nano
arduino-cli upload --port %1 --fqbn arduino:avr:nano:cpu=atmega328old %3
goto commonexit
:common
arduino-cli upload --port %1 --fqbn arduino:avr:%2 %3
goto commonexit
:commonexit
echo ""

