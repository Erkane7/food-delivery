import { Request, Response } from "express";
import Order from "../../models/order";

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("items");

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get order", error });
  }
};
