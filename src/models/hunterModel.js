import mongoose from "mongoose";


const hunterSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  altura_cm: Number,
  peso_kg: Number,
  imagen: String,
  habilidad: String,
  tipoNen: String,
});

const HunterModel = mongoose.model("hunters", hunterSchema);

export class Hunter {
  static async findAll() {
    return await HunterModel.find();
  }

  static async findByName(nombre) {
    return await HunterModel.find({ nombre: new RegExp(nombre, "i") });
  }

  static async create(data) {
    return await HunterModel.create(data);
  }

  static async update(id, data) {
    return await HunterModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id) {
    return await HunterModel.findByIdAndDelete(id);
  }
}
