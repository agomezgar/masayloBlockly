@echo off
arduino-cli config init --overwrite &&arduino-cli core update-index &&arduino-cli core install arduino:avr
