import express from "express";
import { createFoodCategory } from "../controllers/foodCategory/create-fc";
import { deleteFoodCategory } from "../controllers/foodCategory/delete-fc";
import { getFoodCategories } from "../controllers/foodCategory/get-fc";
import { updateFoodCategory } from "../controllers/foodCategory/update-fc";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

foodCategoryRouter.delete("/:categoryId", deleteFoodCategory);

foodCategoryRouter.get("/:categoryId", getFoodCategories);

foodCategoryRouter.put("/:categoryId", updateFoodCategory);
