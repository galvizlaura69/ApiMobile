import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  date: String,
});

const UserModel = mongoose.model("users", userSchema);

export class Users {
  static async findAll() {
    return await UserModel.find();
  }

  static async create(data) {
    return await UserModel.create(data);
  }

}
