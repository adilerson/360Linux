#import json
import serial

ser = serial.Serial('/dev/ttyACM0', 115200)
ser.write(b'1')
exit()
