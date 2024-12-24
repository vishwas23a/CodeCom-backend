import express from 'express';
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail } from '../controller/codeAuthController.js';
import { verifyToken } from '../middleware/verifyToken.js';



const router= express.Router();
router.get('/check-Auth',verifyToken,checkAuth);


router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.post('/verify-email',verifyEmail)
router.post('/forgot-password',forgotPassword)
router.post('/reset-password/:token',resetPassword)

export default router;