import { Request, Response } from "express";
import Food from "../../models/food";

export const getFoodsGroupedByCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await Food.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: { $first: "$categoryDetails.categoryName" },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$name",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
          count: { $sum: 1 },
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
