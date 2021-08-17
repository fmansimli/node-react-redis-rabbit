import { verify } from "jsonwebtoken";

const tokenVerify = async (req, res, next) => {
  try {
    const token = req.headers.auth;
    if (token) {
      const decoded = await verify(token, process.env.TOKEN_SECRET);
      req.user = { ...decoded, token };
      return next();
    }
    throw new Error("no token provided...");
  } catch (error) {
    return res.status(401).json();
  }
};

export default tokenVerify;
