import Food from "../../models/food";
import { Request, Response } from "express";

export const getFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findById(foodId).populate("category");
    res.status(200).send({ succees: true, food });
  } catch (error) {
    res.status(404).send({ message: "api error", error });
  }
};
