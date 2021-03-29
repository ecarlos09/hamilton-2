const db = require('../dbConfig');
// const SQL = require('sql-template-strings');

class User {
    constructor(data) {
        this.username = data.username;
        this.email = data.email;
        this.passwordDigest = data.password_digest;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.run(`SELECT * FROM USERS;`);
                let users = result.rows.map(r => new User(r));
                resolve(users);
            } catch(err) {
                reject('Error retrieving users');
            }
        })
    }

    static create({username, email, password}) {
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.run(`INSERT INTO users(username, email, password_digest)
                                                VALUES (${username}, ${email}, ${password}) RETURNING *;`);
            } catch(err) {
                reject(`Error creating user: ${err}`);
            }
        })
    }

    static findByEmail(email) {
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.run(`SELECT * FROM users WHERE email = ${email};`);
                let user = new User(result.rows[0]);
                resolve(user);
            } catch(err) {
                reject(`Error retrieving user: ${err}`);
            }
        })
    }
}

module.exports = User;