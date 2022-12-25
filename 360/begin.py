import json
import os

arquivo = open("/var/www/html/360Linux/360/data.json", 'r')

with open('data.json', 'r') as f2:
    data = f2.read()

pegaTudo = json.loads(data)

usb = pegaTudo['usb']

os.system("stty -F /dev/tty" + usb + " raw ispeed 115200 ospeed 115200 cs8 -ignpar -cstopb -echo")
os.system("cat < /dev/tty" + usb + " > /dev/null &")
exit()
