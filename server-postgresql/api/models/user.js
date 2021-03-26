const db = require('../dbConfig');
const SQL = require('sql-template-strings');

class User {
    constructor(data) {
        this.username = data.username;
        this.email = data.email;
        this.passwordDigest = data.password_digest;
    }

    static get all() {
        return new Promise ((resolve, reject) => {
            try {
                let result = await db.run(SQL`SELECT * FROM USERS;`);
                let users = result.rows.map(r => new User(r));
                resolve(users);
            } catch(err) {
                reject('Error retrieving users');
            }
        })
    }

    static create({username, email, password}) {
        return new Promise ((resolve, reject) => {
            try {
                let result = await db.run(SQL`INSERT INTO users(username, email, password_digest)
                                                VALUES (${username}, ${email}, ${password}) RETURNING *;`);
            } catch(err) {
                reject(`Error creating user: ${err}`);
            }
        })
    }
}

module.exports = User;