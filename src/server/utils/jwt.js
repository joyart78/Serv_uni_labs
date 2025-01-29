import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token, isRefresh = false) => {
  const secret = isRefresh
    ? process.env.REFRESH_TOKEN_SECRET
    : process.env.JWT_SECRET;

  return jwt.verify(token, secret);
};
