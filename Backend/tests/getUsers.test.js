import { User } from "../models/index.models.js";

const testGetUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("All users are as follows ----->\n", users);

    res.status(200).json({ message: "All users fetched successfully!" });
  } catch (err) {
    console.error("Error getting all users:", err.message);
  }
};

export default testGetUsers;
