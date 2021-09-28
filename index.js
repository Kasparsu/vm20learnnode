const chalk = require('chalk');
const boxen = require('boxen');
console.log(chalk.bgYellow.red('Hello'));

let options = {
    padding: 1,
    borderStyle: 'round',
    title: 'hello',
    titleAlignment: 'center',
    backgroundColor: 'red'
}


console.log(boxen('unicorn', options));
console.log(boxen(chalk.underline('unicorn'), options));