import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const { limit, skip, sort } = req.query;

    const { userName, email } = req.query;
    console.log(req.query);

    const user = await User.find().limit(limit).skip(skip).sort(sort);

    console.log("findUers", user);

    res.status(200).json({
      status: true,
      message: "User retrieve succesfully!",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};
