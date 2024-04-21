import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
    //   required: true, // `required: true` in mongoose is the same as `allowNull: false`
      type: String,
    },

    username: {
      required: true,
      type: String,
      unique: true,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },

    password: {
      required: true,
      type: String,
      min: 6,
      max: 20,
    },

    // is_oauth_enabled: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    collection: "user",
  }
);

const User = mongoose.model("User", userSchema);

export default User;
