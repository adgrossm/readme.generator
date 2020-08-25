function generateMarkdown(data) {
    return `
# ${data.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
    
## Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

    ${data.description}

## Installation:
    ${data.installation}
  
## Usage:
    ${data.usage}

## Contributing:
    ${data.contribution}

## Test:
    ${data.test}

## Credits:
    ${data.credits}

## License:
    For more information aboutt he License, click on the link below.

- [License](https://opensource.org/licenses/${data.license})

## Questions:
    For questions about the ReadMe Generator you can go to my GitHub page at the following link:

- [GitHub Profile](https://github.com/${data.username})

For additional questions please reach out to my email at: ${data.email}

 `;
  }
  
//   function to initialize program 
async function init(){
    try {
        const response = await promptUser();
        const readMe = generateMarkdown(data);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");
     }
     catch (err){
         console.log(err); 
     }
}

// function call to initialize program
init();

  module.exports = generateMarkdown;
  