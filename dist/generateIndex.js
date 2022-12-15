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

//   function generateTeamCard(answers) {]
module.exports = generateIndex;
