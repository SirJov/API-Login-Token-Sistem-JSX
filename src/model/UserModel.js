import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imgProfile: {
      type: String,
      required: true,
    },
    passwordCryptografed: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = { User, userSchema };
