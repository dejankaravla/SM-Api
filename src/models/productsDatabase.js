import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
  description: {
    type: [String],
    required: false,
  },
  published: {
    type: Boolean,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: false,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  dateModified: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("Products", productsSchema);
