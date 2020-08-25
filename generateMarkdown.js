function generateMarkdown(data) {
    return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

# Description:
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


 `;
  }
  



  module.exports = generateMarkdown;
  