import { Router } from 'express';
import {
  getAllApartments,
  getApartmentById,
  createApartment,
  searchApartments
} from '../controllers/apartment.controller';

const router = Router();

router.get('/', getAllApartments);
router.get('/search', searchApartments);
router.get('/:id', getApartmentById);
router.post('/', createApartment);

export default router;
