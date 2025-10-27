import { Saint } from "../models/saintModel.js";

export const getSaintByName = async (req, res) => {
  try {
    const { name } = req.params;
    const saints = await Saint.findByName(name);

    if (saints.length === 0) {
      return res.status(404).json({ message: "Caballero no encontrado" });
    }

    res.json(saints[0]);
  } catch (error) {
    console.error("Error al obtener el caballero:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
