import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const getFoodCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch categories.", error });
  }
};
