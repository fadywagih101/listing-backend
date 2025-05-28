// tests/__mocks__/data-source.ts

export const mockRepository = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

export const AppDataSource = {
  getRepository: jest.fn(() => mockRepository),
};
