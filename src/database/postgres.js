import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_URI,
  ssl: { rejectUnauthorized: false },
});

pool.connect()
  .then(() => console.log("✅ Conectado a PostgreSQL (Supabase)"))
  .catch((err) => {
    console.error("❌ Error al conectar a PostgreSQL:", err);
    process.exit(1);
  });
