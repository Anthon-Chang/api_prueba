// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database.js";

import ninjaRoutes from "./routes/ninjaRoutes.js";
import planRoutes from "./routes/planRoutes.js";

// Cargar variables de entorno
dotenv.config();

// Inicializar app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas principales
app.use("/api/ninjas", ninjaRoutes);
app.use("/api/plans", planRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 API funcionando en http://localhost:${PORT}`)
);
console.log("TEST ENV:", process.env.CLOUDINARY_API_SECRET);

