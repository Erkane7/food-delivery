import { Request, Response } from "express";
import Food from "../../models/food";
import FoodCategory from "../../models/foodCategory";

export const getFoodsGroupedByCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await FoodCategory.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "categoryDetails",
        },
      },
      {
        $project: {
          categoryName: "$categoryName",
          count: { $size: "$categoryDetails" },
          foods: "$categoryDetails",
        },
      },
      {
        $sort: { categoryName: 1 },
      },
    ]);
    
    res.status(200).json({ success: true, foodsByCategory: result });
  } catch (error) {
    console.error("Failed to get foods with category:", error);
    res.status(500).json({ message: "Failed to get foods", error });
  }
};
