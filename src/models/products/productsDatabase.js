import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: false,
  },
  description: {
    type: [String],
    required: false
  },
  published: {
    type: Boolean,
    required: true
  },
  purchasePrice: {
    type: Number,
    required: false
  },
  dateCreated: {
    type: Date,
    required: true
  }

})

export default mongoose.model('Products', productsSchema)