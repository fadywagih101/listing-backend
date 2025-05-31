import { Router } from 'express';
import {
  getAllApartments,
  getApartmentById,
  createApartment,
  searchApartments,
} from '../controllers/apartment.controller';

const router = Router();

/**
 * @swagger
 * /api/apartments:
 *   get:
 *     summary: Get all apartments
 *     tags: [Apartments]
 *     responses:
 *       200:
 *         description: List of apartments
 */
router.get('/', getAllApartments);

/**
 * @swagger
 * /api/apartments/search:
 *   get:
 *     summary: Search apartments
 *     tags: [Apartments]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: unitNumber
 *         schema:
 *           type: string
 *       - in: query
 *         name: project
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filtered apartments
 */
router.get('/search', searchApartments);

/**
 * @swagger
 * /api/apartments/{id}:
 *   get:
 *     summary: Get apartment by ID
 *     tags: [Apartments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Apartment data
 */
router.get('/:id', getApartmentById);

/**
 * @swagger
 * /api/apartments:
 *   post:
 *     summary: Create a new apartment
 *     tags: [Apartments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               project:
 *                 type: string
 *               unitNumber:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Apartment created
 */
router.post('/', createApartment);

export default router;
