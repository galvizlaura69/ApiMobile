import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api",
      version: "1.0.0",
      description: "Documentación de los servicios de mi API con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3001", 
      },
    ],
  },
  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
