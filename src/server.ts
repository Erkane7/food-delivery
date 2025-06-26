import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { foodRouter } from "./routes/food-routes";
import { userRouter } from "./routes/user-routes";
import { foodCategoryRouter } from "./routes/foodCategory-routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/food-categories", foodCategoryRouter);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Connection error:", error);
  }
};

startServer();
