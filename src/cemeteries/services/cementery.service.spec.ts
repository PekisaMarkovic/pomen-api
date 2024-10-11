import { Test, TestingModule } from '@nestjs/testing';
import { CementeryService } from './cementery.service';

describe('CementeryService', () => {
  let service: CementeryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CementeryService],
    }).compile();

    service = module.get<CementeryService>(CementeryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
