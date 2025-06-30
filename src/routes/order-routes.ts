import express, { Request, Response } from "express";
import { deleteOrder } from "../controllers/order/delete-order";
import { updateOrder } from "../controllers/order/update-order";
import { getOrderById } from "../controllers/order/get-orderById";
import { getAllOrders } from "../controllers/order/get-allOrder";
import { createOrder } from "../controllers/order/create-order";

export const orderRoutes = express.Router();

orderRoutes.post("/", createOrder);

orderRoutes.get("/", getAllOrders);

orderRoutes.get("/:userId", getOrderById);

orderRoutes.put("/", updateOrder);

orderRoutes.delete("/:foodOrderId", deleteOrder);
