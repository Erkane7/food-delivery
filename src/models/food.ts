import mongoose, { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: true,
  },
  price: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Food = model("Food", foodSchema);

export default Food;
