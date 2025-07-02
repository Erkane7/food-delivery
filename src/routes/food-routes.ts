import express from "express";

import { createFood } from "../controllers/food/create-food";
import { getFood } from "../controllers/food/get-foodById";
import { updateFood } from "../controllers/food/update-food";
import { deleteFood } from "../controllers/food/delete-food";
import { getFoodsGroupedByCategory } from "../controllers/food/get-allFood";

export const foodRouter = express.Router();

foodRouter.get("/", getFoodsGroupedByCategory);

foodRouter.get("/:foodId", getFood);

foodRouter.post("/", createFood);

foodRouter.put("/:foodId", updateFood);

foodRouter.delete("/:foodId", deleteFood);
