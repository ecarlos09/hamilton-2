const express = require('express');
const router = express.Router();

const Student = require('../models/student');

//Index route for all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.all;
        res.json({students});
    } catch(err) {
        res.status(500).json({err});
    };
});

//Route for retrieving indvidual students
router.get('/:id', async(req, res) => {
    try {
        const student = await Student.findById(parseInt(req.params.id));
        res.json(student);                
    } catch(err) {
        res.status(404).json({err});
    }
})

// //Route for creating a new student
// router.post('/', async (req, res) => {
//     try {

//     } catch {

//     }
// })

// //Route for updating an existing student
// router.patch('/:id', async (req, res) => {
//     try {

//     } catch {

//     }
// })

// //Route for removing a student from the cohort
// router.delete('/:id', async (req, res) => {
//     try {

//     } catch {

//     }
// })

module.exports = router;