const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Required"],
  },
  email: {
    type: String,
    required: [true, "Required"],
  },
  password: {
    type: String,
    required: [true, "Required"],
  },
  confirmpassword: {
    type: String,
    required: [true, "Required"],
  },
  phone: {
    type: Number,
    required: [true, "Required"],
  },
  image: {
    type: String,
    required: [true, "Required"],
  },
  Gender: {
    type: String,
    required: [true, "Required"],
  },
  comments: {
    type: String,
    default: "default",
    required: [true, "Required"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: [true, "Required"],
      },
    },
  ],
});
const userModels = mongoose.model("userModels", userModel);
module.exports = userModels;
