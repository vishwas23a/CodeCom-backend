import express from 'express';
import { createCommunity, getCommunity, joinCommunity } from '../controller/communityController.js';
import { isMember } from '../middleware/isMember.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/createCommunity',createCommunity)
router.post('/joinCommunity',verifyToken, joinCommunity)
router.get('/getCommunity',isMember,getCommunity)

export default router;