const { User } = require('../models/user');
const express = require('express');
const { hashPassword } = require("../utils/passwordUtils");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

const router = express.Router();

router.post('/autheticate', async(req,res)=>{
    const{name,email,password} = req.body;
    if(verifyEmail) return res.status(400).send("Usuário Já Cadastrado");

    const token = jwt.sign({ id: User.id }, authConfig.secret,{
        expiresIn: 86400,
    } );

    return res.send({user, token});

})

exports.create = async(req,res)=>{
    const{name,email,password} = req.body;

    const newPassword = hashPassword(password);

    const verifyEmail = await User.findOne({email}).exec();

    if(verifyEmail) return res.status(400).send("Usuário Já Cadastrado");

    let user = new User({
        name,
        email,
        password:newPassword
    });

    user = await user.save();
    return res.send({user});


}