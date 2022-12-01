import serial

ser = serial.Serial('/dev/ttyACM0', 115200, timeout=1)
ser.write(b'1/n')

#ser = serial.Serial('/dev/ttyACM0', 115200, timeout=1)
print(ser.read())

exit()
