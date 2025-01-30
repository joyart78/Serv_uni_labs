import { AuthService } from "../services/AuthService.js";
import { TokenService } from "../services/TokenService.js";
import { RegisterDTO, AuthDTO, UserDTO } from "../dtos/index.js";

export class AuthController {
  static async register(req, res) {
    try {
      const registerDTO = new RegisterDTO(req.body);
      const user = await AuthService.register(registerDTO);
      res.cookie("refreshToken", user.token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(201).json(new UserDTO(user).toResource());
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const authDTO = new AuthDTO(req.body);
      const { accessToken, refreshToken } = await AuthService.login(authDTO);
      res.json({ accessToken, refreshToken });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  static async logout(req, res) {
    try {
      await TokenService.revokeToken(req.token);
      res.status(200).json({ message: "Successfully logged out" });
    } catch (error) {
      res.status(500).json({ error: "Logout failed" });
    }
  }

  static async getMe(req, res) {
    res.json(new UserDTO(req.user).toResource());
  }

  static async getTokens(req, res) {
    res.json({ tokens: req.user.tokens });
  }

  static async revokeAll(req, res) {
    try {
      await TokenService.revokeAllTokens(req.user._id);
      res.json({ message: "All tokens revoked" });
    } catch (error) {
      res.status(500).json({ error: "Revoke failed" });
    }
  }

  static async changePassword(req, res) {
    try {
      const { oldPassword, newPassword } = req.body;
      await AuthService.changePassword(req.user, oldPassword, newPassword);
      res.json({ message: "Password changed successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
