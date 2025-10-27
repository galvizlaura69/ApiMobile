import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Saint Seiya API",
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
        Saint: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Seiya",
            },
            constellation: {
              type: "string",
              example: "Pegaso",
            },
            armorType: {
              type: "string",
              example: "Bronce",
            },
            powerLevel: {
              type: "integer",
              example: 8500,
            },
            guardianGod: {
              type: "string",
              example: "Atena",
            },
            imageUrl: {
              type: "string",
              example:
                "https://pm1.aminoapps.com/7101/9a964d11e1237e656448e86c2187574a25b66e8.jpg",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
