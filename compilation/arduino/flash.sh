if [ $5 = "esp" ] ;
then
./arduino-cli upload --port $1 --fqbn $2:$3:$4 sketch
elif [ $4 = "uno" ] || [ $4 = "leonardo" ];
then
./arduino-cli upload --port $1 --fqbn $2:$3:$4 sketch
else
./arduino-cli upload --port $1 --fqbn $2:$3:$4:cpu=$5 sketch
fi
