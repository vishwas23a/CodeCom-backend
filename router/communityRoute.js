import express from 'express';
import { createCommunity,  getCreatedCommunity,  getJoinedCommunity, joinCommunity } from '../controller/communityController.js';

import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/createCommunity',verifyToken,createCommunity)
router.post('/joinCommunity',verifyToken, joinCommunity)
router.get('/getJoinedCommunity',verifyToken,getJoinedCommunity)
router.get('/getCreatedCommunity',verifyToken,getCreatedCommunity)

export default router;