import express from "express";

import { createFoodCategory } from "../controllers/foodCategory/create-fc";
import { deleteFoodCategory } from "../controllers/foodCategory/delete-fc";
import { getCategoryById } from "../controllers/foodCategory/get-fcById";
import { updateFoodCategory } from "../controllers/foodCategory/update-fc";
import { getAllCategories } from "../controllers/foodCategory/get-allFc";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getAllCategories);

foodCategoryRouter.get("/:categoryId", getCategoryById);

foodCategoryRouter.put("/:categoryId", updateFoodCategory);

foodCategoryRouter.delete("/:categoryId", deleteFoodCategory);
