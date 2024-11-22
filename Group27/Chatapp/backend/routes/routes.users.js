import express from "express";
import verifyRoute from "../middleware/verifyRoute.js";
import getUsers from "../controllers/users.controllers.js";
const router = express.Router();
router.get("/", verifyRoute, getUsers);
router.get("/user", (req, res) => {
  res.send("user");
});
export default router;
