const Database = require('./Database')


class EmployeeDatabase extends Database {
    constructor(options) {
    super(options)
    }

    getDepartments() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM department', (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM role', (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
}



getEmployees() {
    return new Promise((resolve, reject) => {
        this.db.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

addDepartment(department) {

    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO department SET ?', {name: department.department_name}, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(`Successfully added ${department.department_name}`)
        })
    })
}

addRole(role) {

    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO role SET ?', {title: role.title, salary: role.salary, department: role.department_id}, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(`Successfully added ${role.title}`)
        })
    })
}

addEmployee(employee) {

    const employeeL = {
        first_name: employee.first_,
        last_name: employee.last_name,
        role_id: employee.role_id,
        manager_id: employee.manager_id
    }
    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO employee SET ?', employeeL, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(`Successfully added ${employee.first_name}`)
        })
    })
}

updateEmployee(employee) {

    return new Promise((resolve, reject) => {
        this.db.query('UPDATE employee SET role_id? WHERE id=?', [employee.role_id, employee.employee_id], (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

}

module.exports = EmployeeDatabase