const db = require('../dbConfig');
const SQL = require('sql-template-strings');

class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.repos = data.repos;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const studentsData = await db.query(SQL`SELECT * FROM students;`);
                const students = studentsData.rows.map(s => new Student(s));
                resolve(students);
            } catch (err) {
                reject("Error retrieving cohort members!");
            }
        });
    };

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let studentData = await db.query(`SELECT * FROM students WHERE id=$1;`, [ id ]);
                let student = new Student(studentData.rows[0]);
                resolve(student);
            } catch (err) {
                reject('Student could not be found.');
            }
        });
    };

    // Method for creating a new student
    static create(name, username, repos) {
        return new Promise (async (resolve, reject) => {
            try{
                let studentData = await db.query(`INSERT INTO students (name, username, repos) VALUE ($1, $2, $3) RETURNING *;`, [name, username, repos]);
                let newStudent = new Student(studentData.rows[0]);
                resolve(newStudent);
            } catch(err) {
                reject('Error creating student');
            }
        });
    };

    // Method for updating a student
    update() {
        return new Promise (async (resolve, reject) => {
            try {
                let updatedStudentData = await db.query(`UPDATE students SET repos = repos + 1 WHERE id=$1 RETURNING *;`, [ this.id]);
                let updatedStudent = new Student(updatedStudentData[0]);
                resolve(updatedStudent);
            } catch (err) {
                reject('Student could not be updated');
            }
        });
    };

    //Method for deleting a student
    // destroy() {
    //     return new Promise (async (resolve, reject) => {
    //         try {
                
    //         } catch (err) {
                
    //         }
    //     });
    // };
    
}

module.exports = Student;