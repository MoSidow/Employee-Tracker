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
            this.db.query('SELECT role.id, role.title, role.salary, department_name as department_name FROM role INNER JOIN department ON role.department_id = department.id', (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
}



getEmployees() {
    return new Promise((resolve, reject) => {
        this.db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title as role_title, role.salary as role_salary, employee.manager_id, department_name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id`, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

addDepartment(department) {

    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO department SET ?', {department_name: department.department_name}, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(`Successfully added ${department.department_name}`)
        })
    })
}

addRole(role) {

    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO role SET ?', {title: role.title, salary: role.salary, department_id: role.department_id}, (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(`Successfully added ${role.title}`)
        })

    })
}

addEmployee(employee) {

    const employeeL = {
        first_name: employee.first_name,
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
        this.db.query(`UPDATE employee SET role_id=? WHERE id=?`, [employee.role_id, employee.employee_id], (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

}

module.exports = EmployeeDatabase