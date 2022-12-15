const inquirer = require('inquirer');
const fs = require('fs');
const Profile = require("./lib/Employee");

const profile = new Profile();

const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the employees name?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the employees id number?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the employees email address?',
    },
];

function writeToFile(answers) {
    const readMeContent = generate(answers);
    fs.writeFile('index.html', readMeContent, (err) =>
        err ? console.log(err) : console.log('Success!'))
};

function init() {
    inquirer.prompt(questions).then((answers) => 
    writeToFile(answers));
};

init();