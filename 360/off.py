import serial

ser = serial.Serial('/dev/ttyACM0', 115200)
ser.write(b'0')
exit()