const db = require('../dbConfig');

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
                const studentsData = await db.query(`SELECT * FROM students;`);
                const students = studentsData.rows.map(s => new Student(s));
                resolve(students);
            } catch (err) {
                reject("Error retrieving cohort members!");
            }
        })
    }

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let studentData = await db.query(`SELECT * FROM students WHERE id=$1;`, [ id ]);
                let student = new Student(studentData.rows[0]);
                resolve(student);
            } catch (err) {
                reject('Student could not be found.');
            }
        })
    }

    // static findByName(name) {
    //     return new Promise (async (resolve, reject) => {
    //         try {

    //         } catch (err) {
                
    //         }
    //     })
    // }
}

module.exports = Student;