import express from "express";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";

import authRouter from "./routes/routes.auth.js";
import MessageRouter from "./routes/routes.message.js";
import connection from "./db/mongodb.conn.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieparser());


app.use("/api/v1/auth", authRouter);

app.use("/api/v1/message", MessageRouter);
app.listen(PORT, () => {
  connection();
  console.log("server is running at:", PORT);
});
