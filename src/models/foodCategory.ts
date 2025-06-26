import { model, Schema } from "mongoose";

const foodCategorySchema = new Schema({
  categoryName: { type: String, required: true },
  createAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const FoodCategory = model("FoodCategory", foodCategorySchema);
export default FoodCategory;
