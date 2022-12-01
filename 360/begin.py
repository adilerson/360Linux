import os

os.system("stty -F /dev/ttyACM0 raw ispeed 115200 ospeed 115200 cs8 -ignpar -cstopb -echo");
os.system("cat < /dev/ttyACM0 > /dev/null &");
#os.system('echo "9" > /dev/ttyACM0');
