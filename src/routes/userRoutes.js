import express from "express";
import { getUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/", getUser)

export default userRoutes