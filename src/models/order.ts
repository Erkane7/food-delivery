import mongoose, { Schema, Document, Types } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERD",
}
export interface OrderItemDocument extends Document {
  food: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface OrderDocument extends Document {
  foodName: { type: String; required: true };
  user: Types.ObjectId;
  items: Types.DocumentArray<OrderItemDocument>;
  totalPrice: number;
  status: "PENDING" | "CANCELLED" | "DELIVERD";
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<OrderItemDocument>({
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
});

const OrderSchema = new Schema<OrderDocument>({
  foodName: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: { type: [OrderItemSchema], required: true },
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: Object.values(FoodOrderStatusEnum),
    default: FoodOrderStatusEnum.PENDING,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
