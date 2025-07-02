import { Request, Response } from "express";
import Food from "../../models/food";

export const createFood = async (req: Request, res: Response) => {
  console.log("Request body:", req.body);

  try {
    const newFood = new Food(req.body);
    console.log("New food before save:", newFood);

    const savedFood = await newFood.save();
    console.log("Saved food:", savedFood);

    res.status(201).json({ success: true, food: savedFood });
  } catch (error) {
    console.error("Error creating food:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create food", error });
  }
};
