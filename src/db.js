import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Conectado a MongoDB Atlas (AppsU)");
    })
    .catch((error) => {
      console.error("❌ Error al conectar a MongoDB:", error);
      process.exit(1);
    })
    .finally(() => {
      console.log("🔄 Intento de conexión finalizado.");
    });
  }
