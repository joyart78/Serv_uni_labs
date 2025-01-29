import jwt from "jsonwebtoken";
import Token from "../models/Token.js";
import User from "../models/User.js";

export class TokenService {
  static async generateTokens(user) {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN },
    );

    await this.saveToken(user._id, accessToken);
    return { accessToken, refreshToken };
  }

  static async saveToken(userId, token) {
    const user = await User.findById(userId);
    if (user.tokens.length >= process.env.MAX_ACTIVE_TOKENS) {
      user.tokens.shift();
    }
    user.tokens.push(token);
    await user.save();
  }

  static async revokeToken(token) {
    await User.updateOne({ tokens: token }, { $pull: { tokens: token } });
  }

  static async revokeAllTokens(userId) {
    await User.findByIdAndUpdate(userId, { $set: { tokens: [] } });
  }
}
