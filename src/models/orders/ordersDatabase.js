import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  clientType: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  products: {
    type: [
      {
        name: String,
        quantity: Number,
        images: [String],
        price: Number,
        totalPrice: Number,
      },
    ],
    required: true,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Orders", ordersSchema);
