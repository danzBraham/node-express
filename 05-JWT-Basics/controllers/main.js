import CustomAPIError from "../errors/custom-error.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }
  const id = nanoid();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user-created", token });
};

export const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello Zidan",
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
