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

export const createHunterSql = async (req, res) => {
  try {
    const { id, nombre, edad, altura_cm, peso_kg, imagen, habilidad, tiponen } = req.body;

    const result = await pool.query(
      `INSERT INTO hunters (id, nombre, edad, altura_cm, peso_kg, imagen, habilidad, tiponen)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [id, nombre, edad, altura_cm, peso_kg, imagen, habilidad, tiponen]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error interno" });
  }
};


export const updateHunterSql = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, edad, altura_cm, peso_kg, imagen, habilidad, tiponen } =
      req.body;

    const result = await pool.query(
      `UPDATE hunters SET nombre=$1, edad=$2, altura_cm=$3, peso_kg=$4, imagen=$5, habilidad=$6, tiponen=$7
       WHERE id=$8 RETURNING *`,
      [nombre, edad, altura_cm, peso_kg, imagen, habilidad, tiponen, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ msg: "no existe" });

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "error interno" });
  }
};

export const deleteHunterSql = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `DELETE FROM hunters WHERE id=$1 RETURNING *`,
      [id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ msg: "no existe" });

    res.json({ msg: "eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "error interno" });
  }
};
