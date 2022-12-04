/* eslint-disable prettier/prettier */ /*
https://docs.nestjs.com/controllers#controllers
*/
import { EventoService } from './evento.service';

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';

@Controller('eventos')
export class EventoController {
  constructor(private eventoService: EventoService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async createQuarto(@Body() body: any, @Query() query): Promise<any> {

   
   return this.eventoService.getEventos();
  }
}
