import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import infoRoutes from "./routes/infoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { createCookie } from "react-router-dom";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/info", infoRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
