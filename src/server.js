import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDB } from "./db.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";
import hunterRoutes from "./routes/hunterRoutes.js"
import hunterSqlRoutes from "./routes/hunterSqlRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/hunters", hunterRoutes); 
app.use("/api/hunters-sql", hunterSqlRoutes);

connectMongoDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
