import { mockRepository } from '../__mocks__/dataSource';
import { CreateApartmentDto } from '../../dto/CreateApartmentDto';
import * as apartmentService from '../../services/apartment.service';


jest.mock('../../database/data-source', () => {
  const { AppDataSource } = require('../__mocks__/dataSource');
  return { AppDataSource };
});

describe('Apartment Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllApartments', () => {
    it('should return all apartments', async () => {
      const mockData = [{ id: 1, unitName: 'Apt1' }];
      mockRepository.find.mockResolvedValue(mockData);

      const result = await apartmentService.getAllApartments();

      expect(result).toEqual(mockData);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('getApartmentById', () => {
    it('should return apartment by ID', async () => {
      const mockApartment = { id: 1, unitName: 'Apt1' };
      mockRepository.findOneBy.mockResolvedValue(mockApartment);

      const result = await apartmentService.getApartmentById(1);

      expect(result).toEqual(mockApartment);
      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });

    it('should return null when apartment not found', async () => {
      mockRepository.findOneBy.mockResolvedValue(null);

      const result = await apartmentService.getApartmentById(999);

      expect(result).toBeNull();
    });
  });

  describe('createApartment', () => {
    it('should create and save an apartment', async () => {
      const dto: CreateApartmentDto = {
        name: 'New Apt',
        unitNumber: '101',
        project: 'Oasis',
        description: 'Nice view',
      };

      const created = { ...dto, id: 1 };

      mockRepository.create.mockReturnValue(created);
      mockRepository.save.mockResolvedValue(created);

      const result = await apartmentService.createApartment(dto);

      expect(result).toEqual(created);
      expect(mockRepository.create).toHaveBeenCalledWith(dto);
      expect(mockRepository.save).toHaveBeenCalledWith(created);
    });

    it('should throw error if save fails', async () => {
      const dto: CreateApartmentDto = {
        name: 'Apt X',
        unitNumber: '999',
        project: 'Ghost',
      };

      const created = { ...dto, id: 99 };

      mockRepository.create.mockReturnValue(created);
      mockRepository.save.mockRejectedValue(new Error('Save failed'));

      await expect(apartmentService.createApartment(dto)).rejects.toThrow('Save failed');
    });
  });
});
