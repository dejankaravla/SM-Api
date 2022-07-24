import mongoose from "mongoose";

const productClassSchema = new mongoose.Schema({
  name: {
    type: {},
    required: true,
  },
  subclass: {
    type: [{}],
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

export default mongoose.model("ProductClassSchema", productClassSchema);
