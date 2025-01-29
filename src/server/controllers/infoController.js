import mongoose from "mongoose";

export const getServerInfo = (req, res) => {
  res.json({
    nodeVersion: process.version,
    server: "Express",
    environment: process.env.NODE_ENV || "development",
  });
};

export const getClientInfo = (req, res) => {
  res.json({
    ip: req.ip,
    userAgent: req.get("User-Agent"),
    referrer: req.get("Referer"),
  });
};

export const getDatabaseInfo = async (req, res) => {
  try {
    const adminDb = mongoose.connection.db.admin();
    const dbInfo = await adminDb.command({ serverStatus: 1 });

    res.json({
      database: "MongoDB",
      version: dbInfo.version,
      storageEngine: dbInfo.storageEngine.name,
      uptime: dbInfo.uptime,
    });
  } catch (error) {
    res.status(500).json({ error: "Database information unavailable" });
  }
};
