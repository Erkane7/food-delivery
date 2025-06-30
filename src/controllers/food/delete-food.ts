import { Request, Response } from "express";
import Food from "../../models/food";

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const deletedFood = await Food.findByIdAndDelete(foodId);

    res
      .status(200)
      .json({ success: true, message: "Food deleted successfully." }),
      deletedFood;
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete food.", error });
  }
};
