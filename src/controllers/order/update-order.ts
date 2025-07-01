import { Request, Response } from "express";
import Order from "../../models/order";

export const updateOrder = async (req: Request, res: Response) => {
  const { foodOrderId } = req.params;
  try {
    const updatedOrder = await Order.findOneAndUpdate({ foodOrderId: String });

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update order", error });
  }
};
