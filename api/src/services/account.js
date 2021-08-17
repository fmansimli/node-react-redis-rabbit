import User from "../models/user";

export async function refresh(_id) {
  return await User.findById(_id).select("-password");
}
