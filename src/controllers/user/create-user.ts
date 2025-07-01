import { Request, Response } from "express";
import User from "../../models/user";

export const createUser = async (req: Request, res: Response) => {
  const { userName, email, password, address, phoneNumber, isVerified } =
    req.body;

  try {
    const newUser = await new User({
      userName,
      email,
      password,
      address,
      phoneNumber,
      isVerified,
    }).save();

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create user.", error });
  }
};
