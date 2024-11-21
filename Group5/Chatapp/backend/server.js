import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";

import connection from "./db/mongodb.conn.js";
import authRouter from "./routes/routes.auth.js";
import messageRouter from "./routes/routes.message.js";
import userRouter from "./routes/routes.user.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const allowedOrigins = "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    credentials: true, // Allow cookies and other credentials
  })
);

app.use(express.json());
app.use(cookieparser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRouter);
app.use("api/v1/users",userRouter)

app.listen(PORT, () => {
  connection();
  console.log("server is running at:", PORT);
});
