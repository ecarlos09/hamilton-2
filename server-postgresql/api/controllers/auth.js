const express = require('express');
const router = xpress.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

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