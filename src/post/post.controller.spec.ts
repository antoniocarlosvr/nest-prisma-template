import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';

const fakePosts = [
  {
    id: 1,
    title: 'Primeiro post do blog',
    content: 'Apenas um teste.',
    published: true,
    authorId: 967,
  },
  {
    id: 2,
    title: 'Testes unitários',
    content: 'Conteúdo sobre testes unitários.',
    published: true,
    authorId: 941,
  },
  {
    id: 3,
    title: 'Javascript',
    content: 'Conteúdo sobre testes Javascript.',
    published: false,
    authorId: 998,
  },
];

const serviceMock = {
  findAll: jest.fn().mockResolvedValue(fakePosts),
  findOne: jest.fn().mockReturnValue(fakePosts[0]),
  create: jest.fn().mockReturnValue(fakePosts[0]),
  update: jest.fn().mockReturnValue(fakePosts[0]),
  remove: jest.fn(),
};

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [{ provide: PostService, useValue: serviceMock }],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const response = await controller.findAll();

      expect(service.findAll).toBeCalledTimes(1);
      expect(response).toEqual(fakePosts);
    });
  });

  describe('create', () => {
    it('should create a post and return', async () => {
      const response = await controller.create(fakePosts[0]);

      expect(service.create).toBeCalledWith(fakePosts[0]);
      expect(response).toEqual(fakePosts[0]);
    });
  });

  describe('findOne', () => {
    it('should return one post', async () => {
      const response = await controller.findOne('1');

      expect(service.findOne).toBeCalledWith(1);
      expect(response).toEqual(fakePosts[0]);
    });
  });

  describe('update', () => {
    it('should update a post', async () => {
      const response = await controller.update('1', fakePosts[0]);

      expect(service.update).toBeCalledWith(1, fakePosts[0]);
      expect(response).toEqual(fakePosts[0]);
    });
  });

  describe('remove', () => {
    it('should remove a post', async () => {
      const response = await controller.remove('1');

      expect(service.remove).toBeCalledWith(1);
      expect(response).toBeUndefined();
    });
  });
});
