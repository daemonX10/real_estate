import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoutes } from "./routes/UserRoutes.js";

dotenv.config();

const app = new express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running , http://localhost:${PORT}`);
    });


    app.use("/api/user", userRoutes );
