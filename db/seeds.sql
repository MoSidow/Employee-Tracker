INSERT INTO department (id, name) VALUES (1, 'Marketing');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Mechanical Engineer', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Lawyer', 105000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Engineer Manager', 150000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Sales Worker', 95000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Legal Team Leader', 70000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Computer Engineer', 85000, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Mohamed', 'Abdul', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Ahmed', 'Hirsi', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Jhon', 'Olive', 2, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Philip', 'Clark', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Davood', 'Tenark', 4, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Jonathon', 'Saint', 6, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Emily', 'Cliffors', 2, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Sara', 'Ali', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Mark', 'James', 3, NULL);