export interface CreateApartmentDto {
  name: string;
  unitNumber: string;
  address: string;
  price: string;
  space: string;
  project: string;
  description?: string;
  imageUrl?: string;
}