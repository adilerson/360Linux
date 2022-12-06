/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
const { exec } = require('child_process');
@Injectable()
export class ArduinoService {
  async sendArduinoCommand(status: number) {
    

    if (status === 1) {

	
	exec('python3 /var/www/html/360Linux/on.py', (error, stdout, stderr) => {

        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }


        
      });

	setTimeout(() => {
    exec('python3 /var/www/html/360Linux/begin.py', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }})
	  }, 1000);


    } else {
<<<<<<< Updated upstream
      exec('python3 /var/www/html/360/off.py', (error, stdout, stderr) => {
=======
      exec('python3 /var/www/html/360Linux/off.py', (error, stdout, stderr) => {
>>>>>>> Stashed changes
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }


        
      });

setTimeout(() => {
    exec('python3 /var/www/html/360Linux/begin.py', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }})
  }, 1000);

    }
  }
}
