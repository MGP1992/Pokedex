import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it(`should return "Matt's cool pokedex"`, () => {
      expect(appController.getHello()).toBe(`Matt's cool pokedex`);
    });
  });

  describe('/pokemon/:name', () => {
    it('should return an image of the pokemon', () => {
      expect(appController.getPokemonImage("ditto")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
    })
  })
   
});
