/* eslint-disable prettier/prettier */ /*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { readFile } from 'fs/promises';

@Injectable()
export class EventoService {
  async getEventos() {
    if (fs.existsSync(`config/evento/evento.json`)) {
      try {
        const data = JSON.parse(
          await readFile('config/evento/evento.json', 'utf8'),
        );
        return data;
      } catch (error) {
        throw new NotFoundException(error.msg);
      }
    } else {
      throw new NotFoundException('Pasta não encontrada');
    }
  }
}
