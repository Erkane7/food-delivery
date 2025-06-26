import express, { Request, Response } from "express";
import { getUser } from "../controllers/user/get-user";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";
import { createUser } from "../controllers/user/create-user";

export const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUser);

userRouter.get("/:userId", getUser);

userRouter.put("/:userId", updateUser);

userRouter.delete("/:userId", deleteUser);

export default userRouter;
