import { Test, TestingModule } from '@nestjs/testing';
import { GetheringsService } from './getherings.service';

describe('GetheringsService', () => {
  let service: GetheringsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetheringsService],
    }).compile();

    service = module.get<GetheringsService>(GetheringsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
