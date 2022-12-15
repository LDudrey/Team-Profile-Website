// Function generates markdown for README
// https://stackoverflow.com/questions/35803959/template-literals-with-nested-backticks-in-es6
function generateMarkdown(answers) {
    return `# ${answers.title}
      
    ## Description
    ${answers.description}
  
    ## License
    
    ${renderLicenseBadge(answers.license)}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    \`${answers.install}\`
    
    ## Usage
    
    ${answers.usage}
  
    ## Tests
    
    \`${answers.tests}\`
    
    ## Contributing
    
    ${answers.contribute}
     
    ## Questions
    
    Any questions please contact me at: ${answers.email}. 
    More examples of my work are available at [GitHub](https://github.com/${answers.name}).`
  };
  
  module.exports = generateIndex;
  