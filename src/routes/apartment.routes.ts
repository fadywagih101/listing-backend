import { Router } from 'express';
import {
  getAllApartments,
  getApartmentById,
  createApartment,
  searchApartments
} from '../controllers/apartment.controller';

const router = Router();

router.get('/', getAllApartments);
router.get('/:id', getApartmentById); // ✅ This should now work
router.post('/', createApartment);
router.get('/search', searchApartments); // e.g., /api/apartments/search?name=central

export default router;
