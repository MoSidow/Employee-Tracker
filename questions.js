const MainPageQuestions = [
    {
        type: 'list',
        name:'option',
        message: 'What Would You Like To Do?',
        choices: [
            {
                value: 'view-departments',
                name: 'View all departments'
            },

            {
                value: 'view-roles',
                name: 'view all roles'
            },

            {
                value: 'view-employees',
                name: 'View all empoyees'
            },

            {
                name: 'add-department',
                value: 'Add a department'
            },

            {
                name: 'add-role',
                value: 'add a role'
            },

            {
                name: 'add-employee',
                value: 'add an employee'
            },

            {
                name: 'update-role',
                value: 'update a role'
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
        message: 'Please enter the emloyee first name.'
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
