import User from "../models/user";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function loginAsync(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    return null;
  }
  const result = await compare(password, user.password);
  if (!result) {
    return null;
  }

  delete user.password;

  const token = sign(
    { _id: user._id, roles: user.roles },
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  return { user, token };
}

export async function registerAsync(user) {
  await User.create(user);
}
