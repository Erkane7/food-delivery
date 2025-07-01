import express, { Request, Response } from "express";

import { getUserById } from "../controllers/user/get-userById";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";
import { createUser } from "../controllers/user/create-user";
import { getAllUsers } from "../controllers/user/get-allUser";

export const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getAllUsers);

userRouter.get("/:userId", getUserById);

userRouter.put("/:userId", updateUser);

userRouter.delete("/:userId", deleteUser);
