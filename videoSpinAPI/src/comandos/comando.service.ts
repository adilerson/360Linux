/* eslint-disable prettier/prettier */ /*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';

@Injectable()
export class ComandoService {

    constructor(private socket: AppGateway){

    }
  async startGiraGira() {

    //console.log('started socket Gira gira');

    const json = {
        id: 'startGiraGira',
        data: true,
      };
      this.socket.handleEvent(JSON.stringify(json));
  }
}
