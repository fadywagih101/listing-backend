# Listing Backend

This is the backend service for the apartment listing application built with **Node.js**, **Express**, **PostgreSQL**, and **TypeORM**.

## Setup

### 1. Environment Variables

Create a `.env` file:

```env
DB_HOST=host.docker.internal
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=123456789
DB_NAME=apartments

### 2. Run locally
npm install
npm run dev


3. Run via Docker
From the listing-backend/ directory:

docker-compose up --build
Backend will be accessible at:
http://localhost:4001/api/apartments

## For the api documentation:
http://localhost:4001/api-docs/
