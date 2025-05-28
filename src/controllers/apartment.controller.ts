import { Request, Response } from 'express';
import * as apartmentService from '../services/apartment.service';
import { CreateApartmentDto } from '../dto/CreateApartmentDto';

export const getAllApartments = async (req: Request, res: Response) => {
  const apartments = await apartmentService.getAllApartments();
  res.json(apartments);
};

export const getApartmentById = async (req: Request, res: Response): Promise<void> => {
  const apartment = await apartmentService.getApartmentById(Number(req.params.id));
  if (!apartment) {
    res.status(404).json({ message: 'Apartment not found' });
    return;
  }
  res.json(apartment);
};

export const createApartment = async (
  req: Request<{}, {}, CreateApartmentDto>,
  res: Response
): Promise<void> => {
  const apartment = await apartmentService.createApartment(req.body);
  res.status(201).json(apartment);
};

export const searchApartments = async (req: Request, res: Response): Promise<void> => {
  const { name, unitNumber, project } = req.query;
  const apartments = await apartmentService.searchApartments({
    name: name as string,
    unitNumber: unitNumber as string,
    project: project as string,
  });
  res.json(apartments);
};

