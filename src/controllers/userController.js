import { Users } from "../models/userModel";

export const getAllUsers = async (req, res) => {
  try {
    const data = await Users.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo usuarios" });
  }
};


export const createUser = async (req, res) => {
  try {
    const created = await Users.create(req.body);
    return res.status(201).json(created);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error creando el usuario" });
  }
};


