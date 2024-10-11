import { Test, TestingModule } from '@nestjs/testing';
import { TributesService } from './tributes.service';

describe('TributesService', () => {
  let service: TributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TributesService],
    }).compile();

    service = module.get<TributesService>(TributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
