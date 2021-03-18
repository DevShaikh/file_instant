const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter first name"],
    trim: true,
    minlength: [4, "First name cannot be less than 4 characters"],
    maxlength: [32, "First name cannot be more than 32 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name"],
    trim: true,
    minlength: [4, "Last name cannot be less than 4 characters"],
    maxlength: [32, "Last name cannot be more than 32 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email",
    ],
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
    minlength: [4, "Username cannot be less than 4 characters"],
    maxlength: [16, "Username cannot be more than 16 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [4, "Username cannot be less than 4 characters"],
    maxlength: [16, "Username cannot be more than 16 characters"],
  },
  role: {
    type: String,
    required: [true, "Please enter role"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
