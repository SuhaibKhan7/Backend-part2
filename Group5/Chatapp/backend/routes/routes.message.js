import express from "express";
import sendMessage from "../controllers/message.controllers.js";
import verifyRoute from "../middleware/verfiyRoute.js";

const router = express.Router();
router.post("/send/:id", verifyRoute, sendMessage);
export default router;
