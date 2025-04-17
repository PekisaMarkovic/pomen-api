import { Test, TestingModule } from '@nestjs/testing';
import { LeadsService } from '../services/leads.service';
import { LeadsController } from './leads.controller';

describe('LeadsController', () => {
  let controller: LeadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadsController],
      providers: [LeadsService],
    }).compile();

    controller = module.get<LeadsController>(LeadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
