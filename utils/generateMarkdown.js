// TODO: Create a function that returns a license badge based on which license is passed in.  If there is no license, return an empty string
const badges = [
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
]
function renderLicenseBadge(license) {
const licenseObject = {
  "Apache 2.0": badges[0],
  "BSD 3": badges[1],
   "GPL 3.0": badges[2], 
   "MIT": badges [3],
   "none": ""
}
return licenseObject[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, tests}) {
  return `
  # ${title}

  ${renderLicenseBadge(license)}
  
  ## Description
  ${description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contribution](#contribution)

  *[Tests](#tests)

  *[Questions](#questions)

  ### Installation
  ${installation}
 
  ### Usage
  ${usage}
  
  ### License
  This project is licensed under ${license}.

  ### Contribution
  ${contribution}

  ### Tests
  ${tests}

  ## Questions
  Please contact me, Theresa, with any questions you might have about this project.  You can reach me at bountravel@hotmail.com or view more of my work at GitHub, [tpidutti](https://github.com/tpidutti).

  `;
  
} 


module.exports = generateMarkdown;

