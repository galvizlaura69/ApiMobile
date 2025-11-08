import { Hunter } from "../models/hunterModel.js";
import { pool } from "../database/postgres.js";

export const getHuntersMerge = async (req, res) => {
  try {
    const mongoData = await Hunter.findAll();   
    const pgData = await pool.query("SELECT * FROM hunters"); 
    const merged = [...mongoData, ...pgData.rows];
    return res.json(merged);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error obteniendo hunters merge" });
  }
};
