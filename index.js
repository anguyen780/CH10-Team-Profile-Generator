const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const team = [];

function getManager(){
    console.log('Create your team!');

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter your Manager's name."
        },
        {
            type: 'number',
            name: 'managerId',
            message: "Enter your Manager's id."
        },
        {
            type: 'input',
            name:'managerEmail',
            message: "Enter your Manager's email."
        },
        {
            type: 'number',
            name: 'managerOfficeNumber',
            message: "Enter your Manager's office number."
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager)
        addTeam();
    });
};

function getEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter your Engineer's name."
        },
        {
            type: 'number',
            name: 'engineerId',
            message: "Enter your Engineer's id."
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter your Engineer's email."
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter your Engineer's GitHub username."
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer)
        addTeam();
    })
};

function getIntern (){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter your Intern's name."
        },
        {
            type: 'number',
            name: 'internId',
            message: "Enter your Intern's id.",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter your Intern's email."
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter your Intern's school."
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern)
        addTeam();
    });
};

function buildTeam(){
    fs.writeFile('./dist/team.html', generateHTML(team), (err) => 
        err ? console.error(err) : console.log('Team created!'))
}

function addTeam(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamRole',
            message: "Would you like to add another team member?",
            choices: ['Engineer', 'Intern', 'No Thanks']
        }
    ]).then(chosen => {
        switch(chosen.teamRole){
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            case 'No Thanks':
                buildTeam();
                break;
        }
    });
};

getManager();