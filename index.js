const inquirer = require("inquirer");

const EmployeeDatabase = require('./db/EmployeeDatab')
const {MainPageQuestions, AddDepartmentQuestion, AddRoleQuestion, AddEmployeeQuestion, UpdateEmployeeQuestion} = require('./questions')


const db = new EmployeeDatabase (
    {
        host: 'localhost',
        user: 'root',
        password: 'Moha24680',
        database: 'employee_db'
}

);

db.connect();

const ShowMainPageQuestions = () => {
    inquirer.prompt(MainPageQuestions)
    .then((response) => {
        switch (response.option) {
            case 'see_departments':
                see_departments();
                break;
            case 'see_roles':
                see_roles();
            break;
            case 'see_employees':
                see_employees();
                break;
            case 'add_department':
                add_department();
                break;
            case 'add_role':
                    add_role();
                    break;
            case 'add_employee':
                add_employee();
                break;
            case 'update_role':
                update_role();
                break;
        }
    })
}

const see_departments = () => {

    db.getDepartments().then((results) => {
        console.table(results)
ShowMainPageQuestions();
    })
}

const see_roles = () => {

    db.getRoles().then((results) => {
        console.table(results)
ShowMainPageQuestions();
    })
}

const see_employees = () => {

    db.getEmployees().then((results) => {
        console.table(results)
ShowMainPageQuestions();
    })
}

const add_department = () => {
    inquirer.prompt(AddDepartmentQuestion)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('\n', results, '\n')
            ShowMainPageQuestions();
        })
    })
}

const add_role = () => {
    db.getDepartments().then((results) => {

        const question = AddRoleQuestion[2]
        results.forEach((department) => {
            question.choices.push({
                value: department.id,
                name: department.name
            })
        })

        inquirer.prompt(AddRoleQuestion)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('\n', results, '\n');
                ShowMainPageQuestions();
            })
        })
    })
}

const add_employee = () => {

    db.getRoles().then((results) => {

        const roleQuestions = AddEmployeeQuestion[2];
        results.forEach((role) => {

            const role_list = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQuestions.choices.push({
                value: role.id,
                name: role_list
            })
        })


       db.getEmployees().then((results) => {

        const managerQuestions = AddEmployeeQuestion[3];
        results.forEach((employee) => {
            managerQuestions.choices.push({
                value: employee.id,
                name: employee.name
            })
        });

        inquirer.prompt(AddEmployeeQuestion)
        .then((response) => {
            db.addEmployee(response).then((results) => {
                console.log('\n', results, '\n');
                ShowMainPageQuestions();
            })
        })
       })

    })
}

const update_role = () => {

    db.getEmployees().then((results) => {

        const employeeQuestions = UpdateEmployeeQuestion[0];
        results.forEach((employee) => {

            employeeQuestions.choices.push({
                value: employee.id,
                name: employee.name
            })
        })


       db.getRoles().then((results) => {

        const roleQuestions = UpdateEmployeeQuestion[1];
        results.forEach((role) => {
            roleQuestions.choices.push({
                value: role.id,
                name: role.title
            })
        });

        inquirer.prompt(UpdateEmployeeQuestion)
        .then((response) => {
            db.updateEmployee(response).then((results) => {
                console.log('\n', results, '\n');
                ShowMainPageQuestions();
            })
        })
       })

    })
}

ShowMainPageQuestions();
















