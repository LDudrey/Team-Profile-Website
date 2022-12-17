// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const inquirer = require('./util/node_modules/inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Team Managers name?',
      validate(answer) {
        if(!answer) {
            return "Please, enter the Managers name!"
        }
        return true
    }
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the Team Managers id number?',
      validate(answer) {
        if(!answer) {
            return "Please, enter the Managers employee ID number!"
        }
        return true
    }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Team Managers email address?',
      validate(answer) {
        if(!answer) {
            return "Please, enter the Managers email address!"
        }
        return true
    }
    },
    {
      type: 'list',
      name: 'team',
      message: 'Who else do you want to add to your Team?',
      choices: ['Engineer',
        'Intern',
        'Done entering Team Members.'
      ]
    },
  ])
  .then(answers => {
    const htmlContent = generateIndex(answers);
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

// Function generates HTML file
// https://stackoverflow.com/questions/35803959/template-literals-with-nested-backticks-in-es6
function generateIndex(answers) {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="./styles.css" />
          <title>Team Profiles</title>
      </head>
      <body>
      <div class="container">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <h3 class="card-text">${answers.role}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${answers.gitHub}" class="card-link">${answers.gitHub} </a></li>
        </ul>
        </div>
        </div>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <h3 class="card-text">${answers.role}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${answers.gitHub}" class="card-link">${answers.gitHub} </a></li>
        </ul>
        </div>
        </div>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <h3 class="card-text">${answers.role}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${answers.gitHub}" class="card-link">${answers.gitHub} </a></li>
        </ul>
        </div>
      </div>   
      </body>
      </html>`

};