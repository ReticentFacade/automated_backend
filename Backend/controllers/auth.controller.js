import { aesEncrypt, aesDecrypt } from "./helpers/encryption.js";
import checkPassword from "./helpers/checkPassword.js";
import { jwtGenerateToken, jwtVerifyToken } from "./helpers/jwtToken.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const pwStrength = checkPassword(password, username);
  if (pwStrength === "weak") {
    return res.status(400).json({ message: "Weak password. Retry" });
  }

  const data = {
    username,
    email,
    password: aesEncrypt(password),
  };

  // Create & store the new user in DB
  // When stored, use jwtGenerateToken

  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const data = {
    username,
    // password: aesDecrypt(password), -> Here, you're NOT going to decrypt this password. BUT fetch the password `string` stored in the db (using user.password) and decrypt THAT string and match it with the one received in the req.body :)
    password,
  };

  // Check if user exists in database.
  // If it does, generate a token for it (inside the if-statement)

  res.status(200).json({ message: "Ok" });
};

export { register, login };
