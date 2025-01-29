import express from "express";
import { AuthController } from "../controllers/AuthController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", auth, AuthController.logout);
router.get("/me", auth, AuthController.getMe);
router.get("/tokens", auth, AuthController.getTokens);
router.post("/revoke-all", auth, AuthController.revokeAll);
router.put("/change-password", auth, AuthController.changePassword);

export default router;
