import express from "express";
import dotenv from "dotenv";

import authRouter from "./router/auth.routes.js";
import messageRouter from "./router/message.routes.js";
import connection from "./db/mongdb.conn.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRouter);

app.listen(PORT, () => {
  connection();
  console.log("Server is running at :", PORT);
});
