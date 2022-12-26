/* eslint-disable prettier/prettier */ /*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ComandoService } from './comando.service';

@Controller('comando')
export class ComandoController {

    constructor(private comandoService:ComandoService){

    }

  @Get()
  @HttpCode(HttpStatus.OK)
  async startSocket(@Body() body: any, @Query() query): Promise<any> {

    console.log(typeof query.status)

    if (query.status == '1') {
        this.comandoService.startGiraGira();
    }

    return true
  }
}
