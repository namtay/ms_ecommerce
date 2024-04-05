// userController.js
const app = require('express');


const {authenticateUser,createUser,viewUsers,deleteUser,editUser} = require('../models/userModel');


async function login(req, res) {
  const { username, password } = req.body;
  // console.log("request body:",{username}, {password})
  
  const result = await authenticateUser(username, password);
  if (result.success) {
    req.session.user = { username };
    req.session.authenticated=true;
    
    // console.log("session Id:",req.sessionID)
    res.status(200).json({ message: result.message,
                          session: req.session,
                          token:result.token
                        });
  } else {
    res.status(401).json({ message: result.message });
  }
}


async function addUser(req,res){
  const{firstname,lastname,username,type,password} = req.body;
  // console.log("request body: ",{firstname},{lastname},{username},{type},{password})

  const result = await createUser(firstname,lastname,username,type,password);
  if (result.success) {
    res.status(200).json({ message: result.message });
    console.log(result.message);
  } else {
    res.status(401).json({ message: result.message });
  }
}

async function cEditUser(req,res){
  const{firstname,lastname,username,type,password} = req.body;

  const result = await editUser(firstname,lastname,username,type,password);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(401).json({ message: result.message });
  }
}

async function cDeleteUser(req,res){
  const{firstname,lastname,username,type,password} = req.body;


  const result = await deleteUser(firstname,lastname,username,type,password);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(401).json({ message: result.message });
  }
}

async function cViewUsers(req,res){
  const{type} = req.body; 

  const result = await viewUsers(type);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(401).json({ message: result.message });
  }
}



module.exports = {
  login,
  addUser,
  cEditUser,
  cDeleteUser,
  cViewUsers
};
