import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await FoodCategory.findById(req.params.id);
    // if (!category)
    //   return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category", error });
  }
};
