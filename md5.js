const program = require('commander');
const { prompt } = require('inquirer');
const pkg = require('./package.json');
const { keys, questions } = require('./constants');
const { error, log, makeHash } = require('./helpers');

program
    .version(pkg.version)
    .description('Contact management system');

program
    .command('hash')
    .alias('h')
    .description('make md5 hash')
    .action(() => {
        prompt(questions)
        .then(answers => log(makeHash(answers)))
        .catch(e => error(e));
    });

program.parse(process.argv);