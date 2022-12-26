import serial
import json
import os

#arquivo = open("/var/www/html/360Linux/360/data.json", 'r')

with open('/var/www/html/360Linux/360/data.json', 'r') as f2:
    data = f2.read()

pegaTudo = json.loads(data)

usb = pegaTudo['usb']

ser = serial.Serial('/dev/tty' + usb, 115200)
ser.write(b'0')
exit()