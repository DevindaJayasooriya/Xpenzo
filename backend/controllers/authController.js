const User = require('../models/User');
const jwt = require('jsonwebtoken');

//generate token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

//register user
module.exports.registerUser = async (req,res) =>{
    
}
//login user
module.exports. loginUser = async (req,res) =>{

}
//getUserInfo 
module.exports. getUserInfo = async (req,res) =>{

}