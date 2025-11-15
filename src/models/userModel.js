import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  date: String,
});

const UserModel = mongoose.model("users", userSchema);

export class User {
  static async findAll() {
    return await UserModel.find();
  }

  static async findByName(nombre) {
    return await UserModel.find({ nombre: new RegExp(nombre, "i") });
  }

  static async create(data) {
    return await UserModel.create(data);
  }

}
