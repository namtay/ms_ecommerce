
const CryptoJS = require("crypto-js");


const {viewFeedback,addFeedback} = require('../models/feedbackModel');

async function viewAllFeedback(req,res){
   
    // const {name,email,type,message}= req.body
    const result = await viewFeedback();
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ message: result.message });
    }
  }

  module.exports={
    viewAllFeedback
  }

  async function cAddFeedback(req,res){
     const {name,email,type,message}= req.body

    const result = await addFeedback(name,email,type,message);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ message: result.message });
    }
  }

  module.exports={
    viewAllFeedback,
    cAddFeedback
  }