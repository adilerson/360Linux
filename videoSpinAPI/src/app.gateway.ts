/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/websockets/gateways#gateways
*/

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:4200',
      'https://localhost:8100',
      'https://192.168.1.104:8080',
      'https://192.168.1.104',
      'https://192.168.36.36:8080',
      'https://192.168.36.36',
    ],
  },
})
export class AppGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: any;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    const result = JSON.parse(data);
    //console.log(data)
    this.server.emit(result.id, result);
    //console.log('connected')
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('User connected');
  }

  handleDisconnect(client: any) {
    console.log('User disconnected');
  }

  afterInit(server: any) {
    console.log('Socket is live');
  }
}
