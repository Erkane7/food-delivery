import { Request, Response } from "express";
import FoodCategory from "../../models/foodCategory";

export const deleteFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const deleteFoodCategory = await FoodCategory.findByIdAndDelete(categoryId);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
      deleteFoodCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete category.", error });
  }
};
