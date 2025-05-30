import { AppDataSource } from '../database/data-source';
import { Apartment } from '../entities/Apartment';

const apartmentRepo = AppDataSource.getRepository(Apartment);

interface SearchParams {
  name?: string;
  unitNumber?: string;
  project?: string;
}

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


export const searchApartments = async (filters: SearchParams) => {
  const repo = AppDataSource.getRepository(Apartment);
  let query = repo.createQueryBuilder('apartment');

  if (filters.name) {
    query = query.andWhere('apartment.name ILIKE :name', { name: `%${filters.name.trim()}%` });
  }
  if (filters.unitNumber) {
    query = query.andWhere('apartment.unitNumber ILIKE :unitNumber', { unitNumber: `%${filters.unitNumber.trim()}%` });
  }
  if (filters.project) {
    query = query.andWhere('apartment.project ILIKE :project', { project: `%${filters.project.trim()}%` });
  }

  return await query.getMany();
};

