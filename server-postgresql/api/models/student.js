const db = require('../dbConfig');

class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.username=username;
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

    // static findByName(name) {
    //     return new Promise (async (resolve, reject) => {
    //         try {

    //         } catch (err) {

    //         }
    //     })
    // }

    // static findByName(name) {
    //     return new Promise (async (resolve, reject) => {
    //         try {

    //         } catch (err) {
                
    //         }
    //     })
    // }
}