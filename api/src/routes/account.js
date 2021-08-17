import { Router } from "express";

import { refresh } from "../services/account";

const router = Router();

router.get("/refresh", async (req, res, next) => {
  try {
    const user = await refresh(req.user._id);
    res.status(200).json({ user, token: req.user.token });
  } catch (error) {
    next(error);
  }
});

export default router;
