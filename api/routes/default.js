import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ status: "ok", url: req.originalUrl });
});

export default router;
