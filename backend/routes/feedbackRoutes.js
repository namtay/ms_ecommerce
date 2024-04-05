const express = require('express');
const feedbackRouter = express.Router();
const{viewAllFeedback,cAddFeedback}= require('../controllers/feedbackController');
const{verifyToken}=require('../models/jwtUtils')

feedbackRouter.get('/', verifyToken,viewAllFeedback);

feedbackRouter.post('/add',verifyToken,cAddFeedback );

module.exports = feedbackRouter;