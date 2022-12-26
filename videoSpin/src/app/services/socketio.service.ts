/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';

import { Observable, observable, Subscriber } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: any;
  public socketID: any;

  //readonly url: string = 'https://192.168.1.104:3000/';
  readonly url: string = 'https://192.168.36.36:3000/';
  constructor() {
   /* */this.socket = io(this.url);

    console.log(this.socket);
    setTimeout(() => {
      if (this.socket.connected === true) {
        this.socketID = this.socket.id;
        console.log(this.socketID);
      }
    }, 300);
  }

  listen(eventName: any) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: any, data: any) {
    this.socket.emit(eventName, data);
  }
}
