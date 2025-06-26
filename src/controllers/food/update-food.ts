import { Request, Response } from "express";
import Food from "../../models/food";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const updateData = req.body;

  try {
    const updatedFood = await Food.findByIdAndUpdate(foodId, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, food: updatedFood });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update food.", error });
  }
};
