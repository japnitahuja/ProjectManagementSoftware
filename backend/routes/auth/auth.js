const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const jwt_secret=process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
    const {password, email} = req.body
    if(!password || !email){
        res.status(422).json({error: "Password or Email is missing", done: false})
    }
    else{
        try {
            const savedUser = await User.findOne({email})
            if(!savedUser){
                res.status(422).json({error:"Password or email is incorrect", donw: false})
            }else{
                const passwordMatched = await bcrypt.compare(password, savedUser.password)
                console.log(passwordMatched)
                if(passwordMatched){
                    const token = jwt.sign({_id: savedUser._id}, jwt_secret)
                    const {username, email, _id, firstName, lastName, phoneNumber} = savedUser;
                    res.json({message: "SIGNED IN", token, user: {username, email, _id, firstName, lastName, phoneNumber}, done: true})
                }else{
                    res.status(422).json({error:"Password or Email is incorrect",done:false})  
                }
            }
        } catch (error) {
           console.log(error) 
        }
    }
})

router.post("/signup", async (req, res) => {
    const {username, email, password, firstName, lastName, phoneNumber} = req.body;
    if(!email || !password || !username || !firstName || !lastName || !phoneNumber){
        res.status(422).json({error:"Please add all the details",done:false})
    }else{
        try {
            const savedUser = await User.findOne({email})
            if(savedUser){
            res.status(422).json({error:"User already exists",done:false})
            }
            else{
                try {
                    const hashedPassword = await bcrypt.hash(password, 12)
                    const newUser = await User.create({email, password:hashedPassword, firstName, lastName, phoneNumber, username})
                    res.json({message: "User created", user: newUser, done: true})
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (err) {
            console.log(err)
        }
        
    }
})

module.exports = router