import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  try {
    const newCategory = new FoodCategory({ name, description });
    const saved = await newCategory.save();
    res.status(201).json({ success: true, category: saved });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create category.", error });
  }
};
