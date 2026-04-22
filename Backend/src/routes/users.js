import { Router } from "express";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { requireAuth } from "../middlewares/auth.js";
import { profileSchema } from "../validators/auth.js";

const router = Router();

router.get("/me", requireAuth, async (req, res) => {
  const rows = await db.select().from(users).where(eq(users.id, req.user.sub)).limit(1);
  const user = rows[0];
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    phone: user.phone,
    address: user.address,
    avatarUrl: user.avatarUrl,
  });
});

router.patch("/me", requireAuth, async (req, res) => {
  const parsed = profileSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid payload" });
  }

  const updates = parsed.data;
  const updated = await db
    .update(users)
    .set({ ...updates, updatedAt: new Date() })
    .where(eq(users.id, req.user.sub))
    .returning();

  return res.json({
    user: {
      id: updated[0].id,
      fullName: updated[0].fullName,
      email: updated[0].email,
      role: updated[0].role,
      phone: updated[0].phone,
      address: updated[0].address,
      avatarUrl: updated[0].avatarUrl,
    },
  });
});

export default router;
