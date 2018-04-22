const crypto = require('crypto');
const chalkPipe = require('chalk-pipe');

const { keys } = require('./constants');

const chalk = {
    WARN: chalkPipe('orange.bold'),
    ERROR: chalkPipe('bgRed.#cccccc'),
    LOG: chalkPipe('blue.bold'),
}

const error = (msg) => console.log(chalk.ERROR(msg));
const warning = (msg) => console.log(chalk.WARN(msg));
const log = (msg) => console.log(chalk.LOG(msg));

function makeHash(answer) {
    return crypto
        .createHash('md5')
        .update(answer[keys.PHRASE])
        .update(answer[keys.GROUP])
        .update(answer[keys.PASSWORD])
        .digest('hex');
}

module.exports = {
    error,
    warning,
    log,
    makeHash,
}