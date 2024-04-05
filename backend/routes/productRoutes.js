const express = require('express');
const productRouter = express.Router();
const{viewAllProducts}= require('../controllers/productController');
const{verifyToken}=require('../models/jwtUtils')

productRouter.get('/', verifyToken,viewAllProducts);

module.exports = productRouter;
