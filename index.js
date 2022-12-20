// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { inherits } = require('util');
const employees = [];

function addManager() { }
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the Team Managers name?',
    //   validate(answer) {
    //     if(!answer) {
    //         return "Please, enter the Managers name!"
    //     }
    //     return true
    // }
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is the Team Managers id number?',
    //   validate(answer) {
    //     if(!answer) {
    //         return "Please, enter the Managers employee ID number!"
    //     }
    //     return true
    // }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Team Managers email address?',
    //   validate(answer) {
    //     if(!answer) {
    //         return "Please, enter the Managers email address!"
    //     }
    //     return true
    // }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the Team Managers office number?',
    //   validate(answer) {
    //     if(!answer) {
    //         return "Please, enter the Managers office number!"
    //     }
    //     return true
    // }
  },
])
  .then(answers => {
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber,
    )
    employees.push(newManager);
    addEmployee();
  });

function addEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'team',
      message: 'Who else do you want to add to your Team?',
      choices: ['Engineer',
        'Intern',
        'Done entering Team Members.'
      ],
    },
  ]).then(answers => {
    if (answers.team === 'Engineer') {
      addEngineer();
    } else if (answers.team === 'Intern') {
      addIntern();
    } else {
      createPage();
    }
  })
};

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Engineers name!"
      //     }
      //     return true
      // }
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the Engineers id number?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Engineers employee ID number!"
      //     }
      //     return true
      // }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email address?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Engineers email address!"
      //     }
      //     return true
      // }
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is the Engineers GitHub profile name?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Engineers GitHub profile name!"
      //     }
      //     return true
      // }
    },
  ])
    .then(answers => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub,
      )
      employees.push(newEngineer);
      addEmployee();
    })
};

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Interns name?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Intern name!"
      //     }
      //     return true
      // }
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the Interns id number?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Intern employee ID number!"
      //     }
      //     return true
      // }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Interns email address?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Intern email address!"
      //     }
      //     return true
      // }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the Interns School name?',
      //   validate(answer) {
      //     if(!answer) {
      //         return "Please, enter the Intern School name!"
      //     }
      //     return true
      // }
    },
  ])
    .then(answers => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
      )
      employees.push(newIntern);
      addEmployee();
    })
};

function createPage() {
  const htmlContent = generateIndex(employees);
  fs.writeFile('./dist/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// Function generates HTML file by creating cards for each added team member
// https://stackoverflow.com/questions/35803959/template-literals-with-nested-backticks-in-es6
function generateIndex(answers) {
  const cards = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].getRole() === 'Manager') {
      const card = `
<div class="col">
  <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body" style="background-color: #0d6efd">
      <h3 class="card-title">${answers[i].name}</h3>
      <h5 class="card-text">Manager</h5>
    </div>
    <ul class="list-group list-group-flush p-4" style="background-color: #f7f7f7;">
      <li class="list-group-item">ID: ${answers[i].id}</li>
      <li class="list-group-item">Email: <a href="mailto:${answers[i].email}" class="card-link">${answers[i].email}</a></li>
      <li class="list-group-item">Office number: ${answers[i].officeNumber}</li>
    </ul>
  </div>
</div>
`
      cards.push(card);
    } else if (answers[i].getRole() === 'Engineer') {
      const card = `
<div class="col">
  <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body" style="background-color: #0d6efd">
      <h3 class="card-title">${answers[i].name}</h3>
      <h5 class="card-text">Engineer</h5>
    </div>
    <ul class="list-group list-group-flush p-4" style="background-color: #f7f7f7;">
      <li class="list-group-item">ID: ${answers[i].id}</li>
      <li class="list-group-item">Email: <a href="mailto:${answers[i].email}" class="card-link">${answers[i].email}</a></li>
      <li class="list-group-item">GitHub:<a href="https://github.com/${answers[i].gitHub}">${answers[i].gitHub}</a></li>
    </ul>
  </div>
</div>
`
      cards.push(card);
    } else if (answers[i].getRole() === 'Intern') {
      const card = `
<div class="col">
  <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body" style="background-color: #0d6efd">
      <h3 class="card-title">${answers[i].name}</h3>
      <h5 class="card-text">Intern</h5>
    </div>
    <ul class="list-group list-group-flush p-4" style="background-color: #f7f7f7;">
      <li class="list-group-item">ID: ${answers[i].id}</li>
      <li class="list-group-item">Email: <a href="mailto:${answers[i].email}" class="card-link">${answers[i].email}</a></li>
      <li class="list-group-item">School: ${answers[i].school}</li>
    </ul>
  </div>
</div>
`
      cards.push(card);
    }
  }
  let joinedCards = cards.join('');
  const html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
   integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css" />
  <title>Team Profiles</title>
</head>

<body>
<div class="container-fluid p-5" style="background-color: #dc3545;">
<h1>My Team</h1>
</div>
  <div class="container p-5">
    <div class="row">${joinedCards}
      </div>
    </div>   
</body>

</html>
`
  return html;
};

// Function initializes app
function init() {
  addManager();
};

// Function call to initialize app
init();
