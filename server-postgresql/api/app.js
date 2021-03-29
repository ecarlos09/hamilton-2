const express = require('express');
const cors = require('cors');

const api = express();
api.use(cors());
api.use(express.json());

const studentRoutes = require('./controllers/students');
const partnerRoutes = require('./controllers/partners');
const authRoutes = require('./controllers/auth');

api.use('/students', studentRoutes);
api.use('/partners', partnerRoutes);
api.use('/auth', authRoutes);

api.get('/', (req,res) => res.send('Welcome to the Hamilton Cohort!'));

module.exports = api;