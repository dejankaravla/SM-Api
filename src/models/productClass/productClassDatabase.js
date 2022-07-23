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
});

export default mongoose.model("ProductClassSchema", productClassSchema);
