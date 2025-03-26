const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true, 'Please provide your name']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide your password'],
        minlength: 6
    },
    profileImageUrl:{
        type: String,
        default:null
    }
}, {timestamps: true});

//hash password before saving
userSchema.pre("save", async function (next){
    if(!this.isModified("password"))return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

//compare password
userSchema.methods.comparePassword = async function (candidatPassword){
    return await bcrypt.compare(candidatPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);