import express from "express";
import { sendMessage, getMessage } from "../Controller/message.controller.js";
import verifyRoute from "../middleware/verifyRoute.js";

const router = express.Router();

router.post("/send/:id", verifyRoute, sendMessage);
router.get("/rec/:id", verifyRoute, getMessage);
export default router;
