import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Wrong Username"],
  },
  name: {
    type: String,
    required: [true, "Name is Missing"],
  },
  type: {
    type: "String",
    required: [true, "Missing User Type"],
  },
  password: {
    type: String,
    required: [true, "Wrong Password"],
  },
});

export default mongoose.model("Admins", adminsSchema);
