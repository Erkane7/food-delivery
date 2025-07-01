import mongoose, { Schema, Document, Types } from "mongoose";
import currency from "currency.js";

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
const OrderSchema = new Schema<OrderDocument>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: { type: [OrderItemSchema], required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(FoodOrderStatusEnum),
      default: FoodOrderStatusEnum.PENDING,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.pre<OrderDocument>("save", function (next) {
  const total = this.items.reduce((sum, item) => {
    return sum.add(currency(item.price).multiply(item.quantity));
  }, currency(0));

  this.totalPrice = total.value;
  next();
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
