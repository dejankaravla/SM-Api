import mongoose from "mongoose";

const categories = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Missing required Category Name"],
    unique: [true, "Category allready exists"],
  },
  subcategory: {
    type: [String],
    required: false,
  },
  dateCreated: {
    type: Date,
    required: [true, "Date Created is missing"],
  },
  dateModified: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("Categories", categories);
