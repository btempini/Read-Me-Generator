// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   if (data.license == "MIT") {
//     return `
//     MIT
//     `;
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}
  ## Table of Contents
  ***
  ${data.tableOfContents}
  ## Installation Instructions
  ***
  ${data.installation}
  ## Usage Information
  ***
  ${data.usageInformation}
  ## Test Instructions
  ***
  ${data.testInstructions}
  ## Contribution
  ***
  ${data.contribution}
  ## License
  ***

  ## Questions?
  ***
  For all questions please contact me via [email](mailto:${data.email}) OR [github!](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
