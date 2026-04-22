import { Router } from "express";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { refreshTokens, users } from "../db/schema.js";
import { loginSchema, signupSchema } from "../validators/auth.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/tokens.js";
import { env } from "../config/env.js";

const router = Router();

const tokenCookieOptions = {
  httpOnly: true,
  secure: env.nodeEnv === "production",
  sameSite: env.nodeEnv === "production" ? "none" : "lax",
  path: "/",
};

const serializeUser = (user) => ({
  id: user.id,
  fullName: user.fullName,
  email: user.email,
  role: user.role,
  phone: user.phone,
  address: user.address,
  avatarUrl: user.avatarUrl,
});

router.post("/signup", async (req, res) => {
  const parsed = signupSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid payload" });
  }

  const { email, password, fullName } = parsed.data;
  const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const inserted = await db
    .insert(users)
    .values({ email, fullName, passwordHash })
    .returning();

  const user = inserted[0];
  const accessToken = signAccessToken({ sub: user.id, role: user.role, email: user.email });
  const refreshToken = signRefreshToken({ sub: user.id });

  await db.insert(refreshTokens).values({ userId: user.id, token: refreshToken });

  res.cookie("accessToken", accessToken, tokenCookieOptions);
  res.cookie("refreshToken", refreshToken, tokenCookieOptions);
  return res.status(201).json({ user: serializeUser(user), accessToken });
});

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid payload" });
  }

  const { email, password } = parsed.data;
  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = signAccessToken({ sub: user.id, role: user.role, email: user.email });
  const refreshToken = signRefreshToken({ sub: user.id });
  await db.insert(refreshTokens).values({ userId: user.id, token: refreshToken });

  res.cookie("accessToken", accessToken, tokenCookieOptions);
  res.cookie("refreshToken", refreshToken, tokenCookieOptions);
  return res.json({ user: serializeUser(user), accessToken });
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken ?? req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const tokenRow = await db.select().from(refreshTokens).where(eq(refreshTokens.token, refreshToken)).limit(1);
    if (!tokenRow[0]) {
      return res.status(401).json({ message: "Refresh token revoked" });
    }

    const userRows = await db.select().from(users).where(eq(users.id, payload.sub)).limit(1);
    const user = userRows[0];
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const accessToken = signAccessToken({ sub: user.id, role: user.role, email: user.email });
    res.cookie("accessToken", accessToken, tokenCookieOptions);
    return res.json({ accessToken });
  } catch {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
});

router.post("/logout", async (req, res) => {
  const refreshToken = req.cookies.refreshToken ?? req.body.refreshToken;
  if (refreshToken) {
    await db.delete(refreshTokens).where(eq(refreshTokens.token, refreshToken));
  }
  res.clearCookie("accessToken", tokenCookieOptions);
  res.clearCookie("refreshToken", tokenCookieOptions);
  return res.json({ message: "Logged out" });
});

export default router;
