import { Test, TestingModule } from '@nestjs/testing';
import { CementeryService } from '@/cemeteries/services/cementery.service';
import { CemeteryController } from '@/cemeteries/controllers/cemetery.controller';

describe('CemeteryController', () => {
  let controller: CemeteryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CemeteryController],
      providers: [CementeryService],
    }).compile();

    controller = module.get<CemeteryController>(CemeteryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
