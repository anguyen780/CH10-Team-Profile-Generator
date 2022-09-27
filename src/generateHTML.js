const generateHTML = team => {

    const createManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${manager.name}</h2>
          <h3>${manager.role}</h3>
          <p class="card-text">ID: ${manager.id}</p>
          <p class="card-text">Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
          <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
      `;
    };

    const createEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${engineer.name}</h2>
          <h3>${engineer.role}</h3>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
          <p class="card-text">GitHub: <a href='https://github.com/${engineer.github}'>${engineer.github}</a></p>
        </div>
      </div>
      `;
    };

    const createIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${intern.name}</h2>
          <h3>${intern.role}</h3>
          <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
          <p class="card-text">School: ${intern.school}</p>
        </div>
      </div>
      `;
    };

    htmlArr = [];

    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        const role = member.getRole();

        if (role === 'Manager') {
            const managerBlock = createManager(member)
            htmlArr.push(managerBlock);
        }
        
        if (role === 'Engineer') {
            const engineerBlock = createEngineer(member)
            htmlArr.push(engineerBlock)
        }

        if (role === 'Intern') {
            const internBlock = createIntern(member)
            htmlArr.push(internBlock)
        }
    }

const memberBlocks = htmlArr.join('')
const createTeam = createTeamPage(memberBlocks)
    return createTeam;

};

const createTeamPage = function (memberBlocks){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-light bg-dark">
            <span class="navbar mb-0 h1 text-white mx-auto">Team Profile</span>
          </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center m-5">
                ${memberBlocks}
            </div>
        </div>
    </main>
</body>
</html>`;
}

module.exports = generateHTML
