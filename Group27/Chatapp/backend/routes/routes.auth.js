import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
import verifyRoute from "../middleware/verifyRoute.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyRoute, logout);

export default router;
