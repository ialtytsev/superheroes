import mongoose from "mongoose";

const superheroSchema = mongoose.Schema({
  nickname: { type: String, required: true },
  realName: String,
  originDescription: { type: String, required: true },
  superpowers: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  images: { type: String, required: true },
});

const Superhero = mongoose.model("Superhero", superheroSchema);

export default Superhero;
