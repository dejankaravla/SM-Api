import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  mobile: {
    type: String,
    required: false
  }
})

export default mongoose.model('Users', usersSchema)