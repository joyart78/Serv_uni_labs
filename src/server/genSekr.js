import crypto from "crypto";

const generateSecretKey = (length = 64) => {
  return crypto.randomBytes(length).toString("hex");
};

// Генерация ключей
const jwtSecret = generateSecretKey();
const refreshTokenSecret = generateSecretKey();

console.log("JWT_SECRET=", jwtSecret);
console.log("REFRESH_TOKEN_SECRET=", refreshTokenSecret);
