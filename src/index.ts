import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data-source';
import apartmentRoutes from './routes/apartment.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/apartments', apartmentRoutes);

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Database init error', err));
