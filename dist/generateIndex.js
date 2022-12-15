// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



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
      
    

    
    </body>
    </html>`
    
  };
  
  module.exports = generateIndex;
  