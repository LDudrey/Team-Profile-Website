// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const inquirer = require('./util/node_modules/inquirer');
const fs = require('fs');
const generate = require('./dist/generateIndex');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


inquirer
.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the Employees name?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the Employees id number?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the Employees email address?',
    },
])
.then(answers => {
   const htmlContent = generate(answers);
    fs.writeFile('./dist/index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Success!'))
}) 
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});

// function writeToFile(answers) {
//     const readMeContent = generate(answers);
//     fs.writeFile('./dist/index.html', readMeContent, (err) =>
//         err ? console.log(err) : console.log('Success!'))
// };

// function init() {
//     inquirer.prompt(questions).then((answers) => 
//     writeToFile(answers));
// };

// init();