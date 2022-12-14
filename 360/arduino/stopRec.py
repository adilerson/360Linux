import serial
import time

ser = serial.Serial('/dev/ttyACM0', 115200)
ser.write(b'5')
time.sleep(0.05)
ser = arduino.readline().decode("utf-8")

print(data)


exit()