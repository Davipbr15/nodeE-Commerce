const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase: true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64,
        select: false,
    },
    role:{
        type:Number,
        default:0
    },
    picture:{
        type:String,
        default:'./avatar.png'
    },
},{timestamps:true});

exports.User = mongoose.model('User', userSchema);