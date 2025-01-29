import express from "express";
import {
  getServerInfo,
  getClientInfo,
  getDatabaseInfo,
} from "../controllers/infoController.js";

const router = express.Router();

router.get("/server", getServerInfo);
router.get("/client", getClientInfo);
router.get("/database", getDatabaseInfo);

export default router;
