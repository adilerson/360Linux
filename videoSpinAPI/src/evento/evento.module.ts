/* eslint-disable prettier/prettier */
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
