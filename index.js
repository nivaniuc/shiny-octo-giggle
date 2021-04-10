const inquirer = require('inquirer');
const fs = require('fs');

const template = `# ${title}

${description}

## TABLE OF CONTENTS ##

> [Installation] (#INSTALLATION)

> [Usage] (#USAGE)

> [License] (#LICENSE)

> [Credits] (#CREDITS)

> [Contact] (#CONTACTS)

#INSTALLATION
${installation}

#USAGE
${usage}

#LICENSE
${license}

#CREDITS
${credits}

#CONTACTS
-GitHub : ${github}
-LinkedIn : ${linkedin}
-Email : ${email}
`;

inquirer
    .prompt([
                {
                    type: 'input',
                    message: 'Name this project title.',
                    name: 'title',
                },
                {
                    type: 'input',
                    message: 'Describe this application.',
                    name: 'description',
                },
                {
                    type: 'input',
                    message: 'List what required installations are needed for this application.',
                    name: 'installation',
                },
                {
                    type: 'input',
                    message: 'List the usage for this application.',
                    name: 'usage',
                },
                {
                    type: 'input',
                    message: 'List what tye of license this application is using.',
                    name: 'license',
                },
                {
                    type: 'input',
                    message: 'List any credits for this application.',
                    name: 'credits',
                },
                {
                    type: 'input',
                    message: 'List your GitHub.',
                    name: 'github',
                },
                {
                    type: 'input',
                    message: 'List your LinkedIn.',
                    name: 'linkedin',
                },
                {
                    type: 'input',
                    message: 'List your email.',
                    name: 'email',
                },
            ])
            .then(() => {
                const readMe = template;

                fs.writeFile('test-readme.md', readMe, (err) => 
                err ? console.log(err) : console.log("Your Read-Me has been created.")
                );
            });