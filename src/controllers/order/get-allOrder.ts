import { Request, Response } from "express";
import Order from "../../models/order";

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("user").populate("items");

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve orders", error });
  }
};
