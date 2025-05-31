import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data-source';
import apartmentRoutes from './routes/apartment.routes';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';



dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
}));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Apartment Listing API',
      version: '1.0.0',
      description: 'API documentation for the Apartment Listing backend service',
    },
    servers: [
      {
        url: 'http://localhost:4001',
      },
    ],
  },
  apis: ['src/routes/*.ts']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/apartments', apartmentRoutes);

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Database init error', err));
