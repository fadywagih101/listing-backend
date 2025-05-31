import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Apartment Listing API',
      version: '1.0.0',
      description: 'API documentation for the apartment listing app',
    },
    servers: [
      {
        url: 'http://localhost:4001/api',
      },
    ],
  },
  apis: ['src/routes/*.ts'], // adjust this path if your routes are in a different location
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
