import mongoose from "mongoose";

const clientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
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
  dateModified: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("Clients", clientsSchema);
