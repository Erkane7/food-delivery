import { Request, Response } from "express";
import User from "../../models/user";

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const deleted = await User.findByIdAndDelete(userId);

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete user.", error });
  }
};
