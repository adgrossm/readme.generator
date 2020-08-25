function generateMarkdown(data) {
    return `
# ${data.title}

# Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

 `;
  }
  



  module.exports = generateMarkdown;
  