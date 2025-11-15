import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hunter x Hunter",
      version: "1.0.0",
      description: "Documentación de los servicios de mi API con Swagger",
    },
    servers: [
      {
        url: "https://apimobile-sjrq.onrender.com"
      },
    ],
    components: {
      schemas: {
        Hunter: {
          type: "object",
          properties: {
            nombre: { type: "string", example: "Gon Freecss" },
            edad: { type: "integer", example: 12 },
            altura_cm: { type: "integer", example: 154 },
            peso_kg: { type: "integer", example: 49 },
            imagen: {
              type: "string",
              example: "https://static.wikia.nocookie.net/hunterxhunter/images/5/56/Gon_2011.png"
            },
            habilidad: { type: "string", example: "Jajanken" },
            tipoNen: { type: "string", example: "Enhancer" }
          },
        },
        Users: {
          type: "object",
          properties: {
            name: { type: "string", example: "Laura" },
            lastName: { type: "string", example: "Galviz" },
            date: { type: "string", example: "Sat Nov 15 2025 08:41:37 GMT-0500 (hora estándar de Colombia)" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
