import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Wrong Username'],
  },
  password: {
    type: String,
    required: [true, 'Wrong Password'],
  },
});

export default mongoose.model("Admins", adminsSchema);
