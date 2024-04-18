import { aesEncrypt, aesDecrypt } from "./helpers/encryption.js";
import checkPassword from "./helpers/checkPassword.js";
import { jwtGenerateToken, jwtVerifyToken } from "./helpers/jwtToken.js";
import { redisToken } from "../db/redis.db.js";
import { missingFields } from "./helpers/missingFields.js";
import { extractToken } from "./helpers/extractToken.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const pwStrength = checkPassword(password, username);
  if (pwStrength == "weak") {
    return res.status(400).json({ message: "Weak password. Retry" });
  }

  const data = {
    username,
    email,
    password: aesEncrypt(password),
  };
  const missingFieldsError = missingFields(data);
  if (missingFieldsError) {
    return res.status(400).json({ message: missingFieldsError.error });
  }

  try {
    // Create & store the new user in DB
    // const createdUser = ;

    // When stored, use jwtGenerateToken
    const token = await jwtGenerateToken(username);
    console.log("Token created!", token);
    redisToken.setToken(username, token);

    res.status(201).json({ message: "Token set successfully" });
  } catch (error) {
    console.error("Error setting token:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const data = {
    username,
    // password: aesDecrypt(password), -> Here, you're NOT going to decrypt this password. BUT fetch the password `string` stored in the db (using user.password) and decrypt THAT string and match it with the one received in the req.body :)
    password,
  };
  const missingFieldsError = missingFields(data);
  if (missingFieldsError) {
    res.status(400).json({ message: missingFieldsError.error });
  }

  try {
    // Check if user exists in database.
    // const checkUser = ;

    // If it does, generate a token for it (inside the if-statement)
    const token = await jwtGenerateToken(username);

    res.status(200).json({ message: "Ok" });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  const token = extractToken(req);
  try {
    if (token == null) res.status(500).json({ message: "Internal Server Error" });

    redisToken.deleteToken(token);
    console.log("Logout successful");
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Error logging out:", err);
    res.satus(500).json({ message: "Internal Server Error" });
  }
};

export { register, login, logout };
