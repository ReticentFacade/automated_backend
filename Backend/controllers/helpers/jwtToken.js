import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// This file deals with:
// 1. Generating a token
// 1.1. Setting the token as a cookie
// 2. Verifying a token

const jwtGenerateToken = async (userId, res) => {
  try {
    const token = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    // Set token as cookie:
    // await res.cookie("jwt", token, {
    //   maxAge: 1 * 24 * 60 * 60 * 1000,
    //   httpOnly: true,
    // });

    return token;
  } catch (err) {
    console.error("Error generating token:", err.message);
    throw new Error(err.message);
  }
};

const jwtVerifyToken = async (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log("Decoded token:", decodedToken);
    return decodedToken.id;
  } catch (err) {
    console.error("Error verifying token:", err.message);
    return null;
  }
};

export { jwtGenerateToken, jwtVerifyToken };
