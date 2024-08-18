import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/test", (req, res) => {
  res.send("Hello NodeJS");
});
