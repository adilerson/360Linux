import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="display:flex; flex-direction: column; padding: 3rem; justify-content: center; font-size:2.5rem"><a href="https://192.168.36.36/360Linux/front">Acessar Eventos</a></h1>';
  }
}
