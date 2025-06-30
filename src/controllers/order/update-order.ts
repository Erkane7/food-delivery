import { Request, Response } from "express";
import Order from "../../models/order";

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update order", error });
  }
};
