import express from "express";
import verifyRoute from "../middleware/verifyRoute";
const router = express.Router();
router.get("/", verifyRoute, getUsers);
export default router;
