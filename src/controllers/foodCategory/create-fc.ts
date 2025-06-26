import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";
import { log } from "node:console";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  try {
    const newCategory = await new FoodCategory({
      categoryName: categoryName,
    }).save();

    res.status(201).json({ success: true, category: newCategory });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create category.", error });
  }
};
