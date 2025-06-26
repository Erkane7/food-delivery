import { Request, Response } from "express";
import Food from "../../models/food";

export const createFood = async (req: Request, res: Response) => {
  const { name, category, price, image, ingredients } = req.body;

  try {
    const newFood = new Food({ name, category, price, image, ingredients });
    const savedFood = await newFood.save();

    res.status(201).json({ success: true, food: savedFood });
  } catch (error) {
    console.error("Create food error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create food.", error });
  }
};
