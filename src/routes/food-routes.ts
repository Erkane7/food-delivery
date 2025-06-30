import express from "express";
import { createFood } from "../controllers/food/create-food";
import { getFood } from "../controllers/food/get-foodById";
import { updateFood } from "../controllers/food/update-food";
import { deleteFood } from "../controllers/food/delete-food";

export const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.get("/:foodId", getFood);
foodRouter.post("/", createFood);
foodRouter.put("/:foodId", updateFood);
foodRouter.delete("/:foodId", deleteFood);
