import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const updateFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { name, description } = req.body;

  try {
    const updated = await FoodCategory.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true }
    );

    res.status(200).json({ success: true, category: updated });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update category.", error });
  }
};
