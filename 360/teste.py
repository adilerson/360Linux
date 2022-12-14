import serial
import time
import os, fnmatch


listOfFiles = os.listdir('/dev/')
pattern = "tty*"
#print(pattern)
for entry in listOfFiles:
        if fnmatch.fnmatch(entry, pattern):
                try:
                        arduino = serial.Serial(port='/dev/' + entry, baudrate=115200, timeout=.1)
                        arduino.write(b'5')
                        time.sleep(0.05)
                        data = arduino.readline().decode("utf-8")
                        if data == 'ok':
                                print('Porta: ',entry)
                                break
                                exit()
                except:
                        continue
exit()