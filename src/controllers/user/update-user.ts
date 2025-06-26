import { Request, Response } from "express";
import User from "../../models/user";

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { username, email, password } = req.body;

  try {
    const updated = await User.findByIdAndUpdate(
      userId,
      { username, email, password },
      { new: true }
    );

    res.status(200).json({ success: true, user: updated });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update user.", error });
  }
};
