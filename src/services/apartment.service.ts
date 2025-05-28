import { AppDataSource } from '../database/data-source';
import { Apartment } from '../entities/Apartment';

const apartmentRepo = AppDataSource.getRepository(Apartment);

export const getAllApartments = async () => {
  return await apartmentRepo.find();
};

export const getApartmentById = async (id: number) => {
  return await apartmentRepo.findOneBy({ id });
};

export const createApartment = async (data: Partial<Apartment>) => {
  const newApartment = apartmentRepo.create(data);
  return await apartmentRepo.save(newApartment);
};

interface SearchParams {
  name?: string;
  unitNumber?: string;
  project?: string;
}

export const searchApartments = async (filters: SearchParams) => {
  const repo = AppDataSource.getRepository(Apartment);
  const query = repo.createQueryBuilder('apartment');

  if (filters.name) {
    query.andWhere('LOWER(apartment.name) LIKE LOWER(:name)', { name: `%${filters.name}%` });
  }
  if (filters.unitNumber) {
    query.andWhere('LOWER(apartment.unitNumber) LIKE LOWER(:unitNumber)', { unitNumber: `%${filters.unitNumber}%` });
  }
  if (filters.project) {
    query.andWhere('LOWER(apartment.project) LIKE LOWER(:project)', { project: `%${filters.project}%` });
  }

  return await query.getMany();
};

