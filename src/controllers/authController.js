import express from "express";
import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { userName, email, password, age } = req.body;

    console.log(req.body);

    if (!userName || !email || !password) {
      res.json({
        status: false,
        message: "All fields are required!",
      });
    }

    /*const userData = {...req.body};

let user = new User(userData);
await user.save() */

    await User.create(req.body);

    res.status(200).json({
      status: true,
      message: "User signup successfully!",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("login user ==>", req.body);

  if (!email || !password) {
    res.status(404).json({
      status: false,
      meassage: "All fields are required!",
    });
  }

  const myUser = await User.findOne({ email: email });

  console.log("myUser ==>", myUser);

  if (password !== myUser.password) {
    res.status(404).json({
      status: false,
      meassage: "Invalid Credentials!",
    });
  }

  const token = jwt.sign(
    {
      email: myUser.email,
      id: myUser._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  console.log("JWT Token ==>", token);

  res.status(200).json({
    status: true,
    message: "User logged in successfully!",
    token,
  });
};
