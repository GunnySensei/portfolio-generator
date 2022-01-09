const profileDataArgs = process.argv.slice(2);

const [userName, githubName] = profileDataArgs;

const fs = require('fs');
const generatePage = require('./src/page-template.js')

fs.writeFile('./index.html', generatePage(userName, githubName), err => {
    if(err) throw new Error (err); 

    console.log('Portfolio complete! Check out index.html to see the output!')
});

