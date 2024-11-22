import express from "express";
import verifyRoute from "../middleware/verifyRoute.js";

const router = express.Router();
router.get("/", verifyRoute,);
export default router;
