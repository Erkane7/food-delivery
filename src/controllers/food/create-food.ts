import { Request, Response } from "express";
import Food from "../../models/food";

export const createFood = async (req: Request, res: Response) => {
  const { name, category, price, image, ingredients } = req.body;

  try {
    const newFood = await new Food({
      name,
      category,
      price,
      image,
      ingredients,
    }).save();

    res.status(201).json({ success: true, food: newFood });
  } catch (error) {
    console.error("Create food error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create food.", error });
  }
};
