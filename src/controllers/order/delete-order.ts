import { Request, Response } from "express";
import Order from "../../models/order";

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete order", error });
  }
};
