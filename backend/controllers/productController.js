const app = require('express');

const {viewProducts} = require('../models/productModel');

async function viewAllProducts(req,res){
   
    const result = await viewProducts();
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ message: result.message });
    }
  }

  module.exports={
    viewAllProducts
  }