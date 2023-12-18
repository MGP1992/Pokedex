import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { last, lastValueFrom } from 'rxjs';

@Controller() // Define the routes realtive to app - controllers are how we define the API
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService
  ) { }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pokemon/:name') // :name -> indicates a variable name
  async getPokemonData(@Param('name') name: string): Promise<any> {
    const pokeData = await lastValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`));

    return pokeData.data;
  }

  @Get('/pokemon/:id/description')
  async getPokemonDescription(@Param('id') id: string): Promise<any> {
    const pokeData = await lastValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`));

    return pokeData.data;
  }



}
