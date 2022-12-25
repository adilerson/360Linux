import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<link href="https://192.168.36.36/360Linux/360/css/style.css" rel="stylesheet"><h1 style="display:flex; flex-direction: column; padding: 3rem; justify-content: center; font-size:2.5rem;width: 100%;text-align: center;"><a href="https://192.168.36.36/360Linux/front" class="btn" style="font-size: 2.5rem">Acessar Eventos</a></h1>';
  }
}
