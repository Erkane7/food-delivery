import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "user name is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please write a valid email address"],
  },
  password: {
    type: String,
    required: [true, "user passwird is required"],
    minlength: 6,
  },
  phoneNumber: {
    type: String,
    required: [true, "user phone number is required"],
  },
  isVerified: { type: Boolean, required: true },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = model("User", userSchema);

export default User;
