const mysql = require('mysql2');

class Database {
    constructor (options) {
        this.options = options
        this.db = null
    }
    connect () {

    this.db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'employee_db'
    });
}}


module.exports = Database;