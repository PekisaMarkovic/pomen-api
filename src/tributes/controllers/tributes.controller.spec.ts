import { Test, TestingModule } from '@nestjs/testing';
import { TributesController } from './tributes.controller';
import { TributesService } from '../services/tributes.service';

describe('TributesController', () => {
  let controller: TributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TributesController],
      providers: [TributesService],
    }).compile();

    controller = module.get<TributesController>(TributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
