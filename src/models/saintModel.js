import mongoose from "mongoose";

const saintSchema = new mongoose.Schema({
  id:String,
  name: String,
  constellation: String,
  armorType: String,
  powerLevel: Number,
  guardianGod: String,
  imageUrl: String,
});

const SaintModel = mongoose.model("saints", saintSchema);

export class Saint {
  constructor({ id,name, constellation, armorType, powerLevel, guardianGod,imageUrl }) {
    this.id = id;
    this.name = name;
    this.constellation = constellation;
    this.armorType = armorType;
    this.powerLevel = powerLevel;
    this.guardianGod = guardianGod;
    this.imageUrl = imageUrl;
  }

  static async findByName(name) {
    const saints = await SaintModel.find({ name: new RegExp(name, "i") });
    return saints.map(
      (s) =>
        new Saint({
          id:s.id,
          name: s.name,
          constellation: s.constellation,
          armorType: s.armorType,
          powerLevel: s.powerLevel,
          guardianGod: s.guardianGod,
          imageUrl:s.imageUrl
        })
    );
  }
}
