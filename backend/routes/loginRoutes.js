// userRoutes.js
const express = require('express');
const loginRouter = express.Router();
const { login,addUser,cViewUsers } = require('../controllers/userController');
const{verifyToken}=require('../models/jwtUtils')

// Login route
loginRouter.post('/login', login);

loginRouter.post('/add', addUser);

loginRouter.get('/',verifyToken,cViewUsers);

module.exports = loginRouter;
