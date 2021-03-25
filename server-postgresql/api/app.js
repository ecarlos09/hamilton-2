const express = require('express');
const cors = require('cors');

const api = express();
api.use(cors());
api.use(express.json());

const studentRoutes = require('./controllers/students');
const partnerRoutes = require('./controllers/partners');

api.use('/students', studentRoutes);
api.use('/partners', partnerRoutes);

const port = process.env.PORT || 3000;

api.get('/', (req,res) => res.send('Welcome to the Hamilton Cohort!'));

module.exports = api;