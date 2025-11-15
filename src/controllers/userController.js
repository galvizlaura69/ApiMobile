import { User } from "../models/userModel";

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo hunters" });
  }
};


export const createUser = async (req, res) => {
  try {
    const created = await User.create(req.body);
    return res.status(201).json(created);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error creando hunter" });
  }
};






