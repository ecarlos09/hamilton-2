const express = require('express');
const router = express.Router();

const Partner = require('../models/partner');

//Route for displaying a partners
router.get('/:id', async (req,res) => {
    try {
        const partner = await Partner.findById(parseInt(req.params.id));
        res.json(partner);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Route for showing partners and their student
router.get('/:id/students', async (req, res) => {
    try {
        const partner = await Partner.findById(parseInt(req.params.id));
        const students = Partner.students;
        res.json(students);
    } catch (err) {
        res.status(404).send({err})
    }
});

module.exports = router;