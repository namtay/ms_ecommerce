// userRoutes.js
const express = require('express');
const userRouter = express.Router();
const {cViewUsers } = require('../controllers/userController');
const{verifyToken}=require('../models/jwtUtils');

// Login route
// loginRouter.post('/login', login);

// loginRouter.post('/add', addUser);

userRouter.get('/',verifyToken,cViewUsers);

module.exports = userRouter;
