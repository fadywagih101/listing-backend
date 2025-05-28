import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Apartment } from './src/entities/Apartment'

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Turn off in prod!
  logging: false,
  entities: [Apartment],
});
