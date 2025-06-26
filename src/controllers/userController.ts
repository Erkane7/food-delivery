import { User } from "../models/user";

import { Schema, model, Document } from "mongoose";

const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = model<User>("User", userSchema);

export default User;
