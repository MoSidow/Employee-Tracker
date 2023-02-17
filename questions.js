const MainPageQuestions = [
    {
        type: 'list',
        name:'option',
        message: 'What Would You Like To Do?',
        choices: [
            {
                value: 'see_departments',
                name: 'see all departments'
            },

            {
                value: 'see_roles',
                name: 'see all roles'
            },

            {
                value: 'see_employees',
                name: 'see all employees'
            },

            {
                value: 'add_department',
                name: 'Add a department'
            },

            {
                value: 'add_role',
                name: 'add a role'
            },

            {
                value: 'add_employee',
                name: 'add an employee'
            },

            {
                value: 'update_role',
                name: 'update a role'
            }

    ]
    }
]

const AddDepartmentQuestion = [
    {
        type: 'input',
        name: 'department_name',
        message: 'Please Enter the name of the new department.',
        choices: []
    }
]

const AddRoleQuestion = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the name of the new role.'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the role Salary.'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Please select the department for your role.',
        choices: []
    }
]

const AddEmployeeQuestion = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Please enter the emloyee first name.'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Please enter the emloyee last name.'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Please select the emloyee role.',
        choices: []
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Please select the emloyee manager.',
        choices: []
    },
]

const UpdateEmployeeQuestion = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Please select an Employee to update.',
        choices: []
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Please select the Employee new role.',
        choices: []
    }
]

module.exports = {MainPageQuestions, AddDepartmentQuestion, AddRoleQuestion, AddEmployeeQuestion, UpdateEmployeeQuestion}
