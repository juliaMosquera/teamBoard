// Asi se crea un servidor

import express from "express";  //servidor general
import cors from "cors";        //reglas de seguridad
import db from "./db/db.js";     //base de datos
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";  //variables de entornos

dotenv.config();

const app = express();      // app es todo el servidor
app.use(express.json());     //usa  el servidor general
app.use(cors());            //usa todo para la seguridad
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.listen(process.env.PORT, () =>
console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection();    //llama a la base de datos