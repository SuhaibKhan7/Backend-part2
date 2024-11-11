import express from 'express'
import { logout,login, signup } from '../controllers/auth.controller.js'
const router = express.Router()
router.post('/signup',signup)//function)
router.post('/login',login)//function)
router.post('/logout',logout)//function)
export default router;