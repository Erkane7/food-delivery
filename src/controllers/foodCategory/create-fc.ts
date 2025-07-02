import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  try {
    const category = await new FoodCategory({
      categoryName: categoryName,
    }).save();

    res.status(201).json({ success: true, category });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create category.", error });
  }
};
