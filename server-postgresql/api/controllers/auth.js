require('dotenv').config();

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Create registration route
router.post('/register', async (req,res) => {
    try {
        //Generate salt
        const salt = await bcrypt.genSalt();
        //Hash the user password
        const hashed = await bcrypt.hash(req.body.password, salt);
        await User.create({...req.body, password: hashed});
        res.status(201).json({msg: 'New user created!'});
    } catch(err) {
        res.status(500).json({err});
    }
});

//Create login route
router.post('/login', async (req,res) => {
    try {
        const user  = await User.findByEmail(req.body.email);
        if(!user) {
            throw new Error('There is no user with this email! Double check your spelling, or try another address.')
        };
        const authed = bcrypt.compare(req.body.password, user.passwordDigest);
        if(authed) {
            const payload = {username: user.username, email: user.email};
            const sendToken = (err, token) => {
                if(err) {throw new Error('Error in token generation')};
                res.status(200).json({
                    success: true,
                    token: "Bearer" + token,
                });                
            }
            jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken);                       
        } else {
            throw new Error ('User could not be authenticated.  Retry login.');
        }
    } catch(err) {
        res.status(401).json({err});
    }
});

module.exports = router;