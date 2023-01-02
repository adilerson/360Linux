import serial
import os
import time
import json

with open('/var/www/html/360Linux/360/data.json', 'r') as f2:
    data = f2.read()

pegaTudo = json.loads(data)

usb = pegaTudo['usb']

ser = serial.Serial('/dev/tty' + usb, 115200)
ser.write(b'3')
time.sleep(0.05)


exit()