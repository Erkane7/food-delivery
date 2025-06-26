import { Request, Response } from "express";
import User from "../../models/user";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    const newUser = new User({ username, email, password });
    const saved = await newUser.save();

    res.status(201).json({ success: true, user: saved });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create user.", error });
  }
};
