import { pool } from "../database/postgres.js";

export const getAllHuntersSql = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM hunters");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "error interno" });
  }
};

export const getHunterSqlByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await pool.query(
      "SELECT * FROM hunters WHERE nombre ILIKE $1",
      [name]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ msg: "no existe" });

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "error interno" });
  }
};
