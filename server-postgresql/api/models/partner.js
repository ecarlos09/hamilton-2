const db = require('../dbConfig');

const Student = require('./student');

class Partner {
    constructor(data) {
        this.id = data.id;
        this.name = data.id;
        this.location = data.location;
    }

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let partnerData = await db.query('SELECT * FROM partner WHERE id =$1;', [ id ]);
                let partner = new Partner(partnerData.rows[0]);
                resolve(partner);
            } catch (err) {
                reject('Partner not found');
            }
        })
    };

    get students () {
        return new Promise (async (resolve, reject) => {
            try {
                const studentsData = await db.query('SELECT * FROM students WHERE partner_id = $1;', [ this.id ]);
                const students = studentsData.rows.map(s => new Student(s));
                resolve(students);
            } catch (err) {
                reject("Could not find any students for this partner company.")
            }
        })
    };

};

module.exports = Partner;