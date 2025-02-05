import { Test, TestingModule } from '@nestjs/testing';
import { BlogsService } from '@/blogs/services/blogs.service';
import { BlogsController } from '@/blogs/controllers/blogs.controller';

describe('BlogsController', () => {
  let controller: BlogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogsController],
      providers: [BlogsService],
    }).compile();

    controller = module.get<BlogsController>(BlogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
