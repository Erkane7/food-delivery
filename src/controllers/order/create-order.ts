import { Request, Response } from "express";
import Order from "../../models/order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, items, totalPrice } = req.body;

    const newOrder = new Order({
      user,
      items,
      totalPrice,
    });

    await newOrder.save();

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create order", error });
  }
};
