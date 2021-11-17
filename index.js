//require any dependencies needed for project
const { prompt } = require('inquirer');
require('console.table');
const db = require('./db');


function start(){
    
    startPrompt();
}

function startPrompt(){
    prompt([{
        type: 'list',
        name: 'option',
        message: 'Choose from the following options:',
        choices:[ 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Quit']
    }]).then((res)=>{
        switch(res.option){
            case'view all departments':
            viewAllDepartments();
            break;
            // case 'view all roles':
            
            // break;
            default:
                process.exit()
            }
        })
        
    }
    
    function viewAllDepartments(){
        db.findAllDepartments().then(([data])=>{
            console.table(data);
        })
    }


    start();