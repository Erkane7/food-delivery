import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/user-routes";
import { foodCategoryRouter } from "./routes/foodCategory-routes";
import { foodRouter } from "./routes/food-routes";
import { orderRoutes } from "./routes/order-routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/order", orderRoutes);

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
