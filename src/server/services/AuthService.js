import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { TokenService } from "./TokenService.js";

export class AuthService {
  static async register(registerDTO) {
    const { email, password } = registerDTO;

    if (await User.findOne({ email })) {
      throw new Error("Email already in use");
    }

    const user = new User({ email, password });
    await user.save();
    return user;
  }

  static async login(authDTO) {
    const { email, password } = authDTO;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }

    return TokenService.generateTokens(user);
  }

  static async changePassword(user, oldPassword, newPassword) {
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      throw new Error("Current password is incorrect");
    }

    user.password = newPassword;
    await user.save();
  }
}
