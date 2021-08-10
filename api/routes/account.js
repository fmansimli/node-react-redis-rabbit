import { Router } from "express";
import User from "../models/user";

const router = Router();

router.get("/refresh", async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user, token: req.user.token });
  } catch (error) {
    next(error);
  }
});

export default router;
