import { Test, TestingModule } from '@nestjs/testing';
import { GetheringsController } from './getherings.controller';
import { GetheringsService } from '../services/getherings.service';

describe('GetheringsController', () => {
  let controller: GetheringsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetheringsController],
      providers: [GetheringsService],
    }).compile();

    controller = module.get<GetheringsController>(GetheringsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
