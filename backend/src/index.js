import express from "express";
import dotenv from "dotenv";

// Routers import from "./routes/";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("./api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🗄️ Server is running on port ${PORT}`);
});
