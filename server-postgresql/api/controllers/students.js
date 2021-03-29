const express = require('express');
const router = express.Router();

const Student = require('../models/student');

//Index route for all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.all;
        res.status(200).json({students});
    } catch(err) {
        res.status(500).json({err});
    };
});

//Route for retrieving indvidual students
router.get('/:id', async(req, res) => {
    try {
        const student = await Student.findById(parseInt(req.params.id));
        res.status(200).json(student);                
    } catch(err) {
        res.status(404).json({err});
    }
})

//Route for creating a new student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body.name, req.body.username, req.body.repos);
        res.status(201).json(student);
    } catch(err) {
        res.status(404).json({err});   
    }
})

//Route for updating an existing student
router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findById(parseInt(req.params.id));
        const updatedStudent = await student.update(req.body.name, req.body.username, req.body.repos);
        res.status(200).json({student: updatedStudent});      
    } catch(err) {
        res.status(500).json({err});
    }
})

// //Route for removing a student from the cohort
// router.delete('/:id', async (req, res) => {
//     try {

//     } catch {

//     }
// })

module.exports = router;