import User from "../models/user";

export const getAllUsersEmails = async () => {
  const users = await User.find().select("email");
  return users.map((user) => user.email);
};
