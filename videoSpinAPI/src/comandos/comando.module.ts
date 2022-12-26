/* eslint-disable prettier/prettier */
import { ComandoService } from './comando.service';
import { ComandoController } from './comando.controller';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';

@Module({
  imports: [],
  controllers: [ComandoController],
  providers: [ComandoService,AppGateway],
})
export class ComandoModule {}
