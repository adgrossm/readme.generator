function generateMarkdown(data) {
    return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

## Description:
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation:
    ${data.installation}
 
## Test:
    ${data.test}

## Usage:
    ${data.usage}

## Contributing:
    ${data.contribution}

## License:
For more information about the ${data.license} License, click on the link below.

- [License](https://opensource.org/licenses/${data.license})


 `;
  }
  



  module.exports = generateMarkdown;
  