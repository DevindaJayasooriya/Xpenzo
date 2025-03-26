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
    try {
        const {fullName, email, password, profileImageUrl } = req.body; 

        //checking for missing fields
        if(!fullName || !email || !password){
            return res.status(400).json({message: 'Please provide all fields'});
        }
        //check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already registered!'});
        }
        //create a new user 
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        })
        res.status(201).json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            token: generateToken(user._id)
        }); 
    } catch (error) {
        console.error('User registration failed!!', error);
        res.status(500).json({message: 'User registration failed'});
    }
}

//login user
module.exports. loginUser = async (req,res) =>{

}
//getUserInfo 
module.exports. getUserInfo = async (req,res) =>{

}