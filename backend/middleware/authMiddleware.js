const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decode.id).select("-password");
    } 
    catch (error) {
        console.error('Error while verifying token', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}