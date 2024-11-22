import express from "express";
import verifyRoute from "../middleware/verifyRoute";
import getUsers from "../controllers/users.controllers";
const router = express.Router();
router.get("/", verifyRoute,getUsers);
export default router;
