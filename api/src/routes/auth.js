import { Router } from "express";
import User from "../models/user";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import sendEmail from "../mail/mailSender";
import Mail from "../models/mail";

const router = Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json();
    }
    const result = await compare(password, user.password);
    if (!result) {
      return res.status(400).json();
    }
    const token = sign(
      { id: user._id, roles: user.roles },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    sendEmail(
      new Mail(
        user._id,
        "faridmansimli@gmail.com",
        user.username,
        `${user.username} logged in..`,
        "<a>lanet=>></a>",
        "lanet olasi"
      )
    );
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await User.create({ username, email, password });
    res.status(201).json({ status: "ok" });
  } catch (error) {
    next(error);
  }
});

export default router;
