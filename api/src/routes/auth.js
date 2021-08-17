import { Router } from "express";
import { loginAsync, registerAsync } from "../services/auth";

const router = Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const data = await loginAsync(email, password);
    if (!data) {
      return res.status(400).json();
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await registerAsync({ username, email, password });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export default router;
