export interface CreateApartmentDto {
  name: string;
  unitNumber: string;
  project: string;
  description?: string;
  imageUrl?: string;
}