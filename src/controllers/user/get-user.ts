import { Request, Response } from "express";
import User from "../../models/user";
import mongoose from "mongoose";

export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    res.status(200).json({ success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get user.", error });
  }
};
