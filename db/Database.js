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
        password: 'Moha24680',
        database: 'employee_db'
    });
}}


module.exports = Database;