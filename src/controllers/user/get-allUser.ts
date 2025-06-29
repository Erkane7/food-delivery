import { Request, Response } from "express";
import User from "../../models/user";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Fetching users failed", error });
  }
};
