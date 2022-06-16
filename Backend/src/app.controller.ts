import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { last, lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService
  ) { }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pokemon/:name')
  async getPokemonImage(@Param('name') name: string): Promise<any> {
    const pokeData = await lastValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`));

    return `<img src=${pokeData.data.sprites.front_default}>`
  }
}
