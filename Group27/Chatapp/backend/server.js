import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";

import connection from "./db/mongodb.conn.js";
import authRouter from "./routes/routes.auth.js";
import messageRouter from "./routes/routes.message.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieparser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRouter);

app.listen(PORT, () => {
  connection();
  console.log("server is running at:", PORT);
});
