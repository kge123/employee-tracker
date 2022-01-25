const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department;");
  }

  //role id, role title, name of the department the role belongs to, the salary
  findAllRoles() {
    return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;");
  }

  //employee id, first name, last name, title, department, salary, managers full name, 
  findAllEmployees() {
    return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id");
  }

  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }

  createRole(role) {
    return this.connection.promise().query(";");
  }

  createEmployee(employee) {
    return this.connection.promise().query(";");
  }

  updateEmployeeRole(employeeID, roleID) {
    return this.connection.promise().query(";");
  }
}


module.exports = new DB(connection);
