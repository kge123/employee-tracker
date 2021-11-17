USE employees_db;

INSERT INTO department (name)
VALUES ("Finance"),
('Sales'),
('Engineering'),
('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES 
("Finance Manager", 50000, 1),
("Finance Employee", 35000, 1),
("Sales Manager", 50000, 2),
("Sales Employee", 35000, 2),
("Engineering Manager", 50000, 3),
("Engineering Employee", 35000, 3),
("Accounting Manager", 50000, 4),
("Accounting Employee", 35000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Swagger", 1,  NULL ),
("Vinnie","Lopez", 2, 1),
("Guy","Elmore", 3, NULL),
("John", "Doe",4, 3),
("John","Smith",5 , NULL),
("Jack","Black",6 , 5),
("Courtney","Cox" ,7, NULL),
("Jennifer","Aniston",8, 7);