import express from "express";

const router = express.Router();

router.post("/send", sendMessage);

export default router;
