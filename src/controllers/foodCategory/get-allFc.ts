import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};
