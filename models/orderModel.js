import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      ],
      buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      status: {
        type: String,
        default: 'Not Processed',
        enum: ['Not Processed', 'Processing', 'Shipped', 'Delivered', 'Canceled'],
      },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);