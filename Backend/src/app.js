import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { v2 as cloudinary } from "cloudinary";
import Razorpay from "razorpay";
import { env } from "./config/env.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import healthRoutes from "./routes/health.js";
import { errorHandler, notFound } from "./middlewares/error.js";

const app = express();

cloudinary.config({
  cloud_name: env.cloudinaryCloudName,
  api_key: env.cloudinaryApiKey,
  api_secret: env.cloudinaryApiSecret,
});

export const razorpay = new Razorpay({
  key_id: env.razorpayKeyId || "rzp_test_key",
  key_secret: env.razorpayKeySecret || "rzp_test_secret",
});

const authRateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

const rateLimitAuth = async (req, res, next) => {
  try {
    await authRateLimiter.consume(req.ip);
    next();
  } catch {
    res.status(429).json({ message: "Too many auth attempts. Please try again later." });
  }
};

app.use(
  cors({
    origin: env.clientUrl.includes(",") ? env.clientUrl.split(",") : env.clientUrl,
    credentials: true,
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));

app.get("/", (_req, res) => {
  res.json({ message: "Cake Company API is running", version: "1.0.0" });
});

app.use("/api/health", healthRoutes);
app.use("/api/auth", rateLimitAuth, authRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
