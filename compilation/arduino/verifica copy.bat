@echo off
echo %1
if %1 == esp8266 (goto esp8266) 
if %1 == esp32 (goto esp32)
if %1 == nano (goto nano)
if %1 == nanooptiboot (goto nanooptiboot)
goto common
:esp8266
arduino-cli.exe compile --libraries libraries --fqbn esp8266:esp8266:nodemcuv2 %2
goto commonexit
:esp32
arduino-cli.exe compile --libraries libraries --fqbn esp32:esp32:esp32wrover %2
goto commonexit
:nanooptiboot
arduino-cli.exe compile --libraries libraries --fqbn arduino:avr:nano %2
goto commonexit
:nano
arduino-cli.exe compile --libraries libraries --fqbn arduino:avr:nano:cpu=atmega328old %2
goto commonexit
:common
arduino-cli.exe compile --libraries libraries --fqbn arduino:avr:%1 %2
goto commonexit
:commonexit
echo ""