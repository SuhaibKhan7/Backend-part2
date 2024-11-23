import express from "express";
import {
  auth0login,
  login,
  logout,
  singup,
} from "../Controller/auth.controller.js";
import verifyAuth0 from "../middleware/verifyAuth0.js";

const router = express.Router();

router.post("/signup", singup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/auth0login", verifyAuth0, auth0login);

export default router;
