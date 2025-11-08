import { Hunter } from "../models/hunterModel.js";

export const getAllHunters = async (req, res) => {
  try {
    const data = await Hunter.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo hunters" });
  }
};

export const getHunterByName = async (req, res) => {
  try {
    const { nombre } = req.params;
    const data = await Hunter.findByName(nombre);

    if (data.length === 0)
      return res.status(404).json({ error: "Hunter no encontrado" });

    return res.json(data[0]);
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo hunter" });
  }
};

export const createHunter = async (req, res) => {
  try {
    const created = await Hunter.create(req.body);
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json({ error: "Error creando hunter" });
  }
};

export const updateHunter = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Hunter.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Hunter no encontrado" });
    }

    return res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error actualizando hunter" });
  }
};


export const deleteHunter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Hunter.delete({ _id: id });

    if (deleted.deletedCount === 0)
      return res.status(404).json({ error: "Hunter no encontrado" });

    return res.json({ message: "Hunter eliminado" });
  } catch (error) {
    return res.status(500).json({ error: "Error eliminando hunter" });
  }
};

