const keys = {
    PHRASE: 'phrase',
    GROUP: 'group',
    PASSWORD: 'password',
}

const questions = [
    {
        type: 'input',
        name: keys.PHRASE,
        message: 'Enter common phrase ...'
    },
    {
        type: 'input',
        name: keys.GROUP,
        message: 'Enter group ...'
    },
    {
        type: 'password',
        name: keys.PASSWORD,
        message: 'Enter secret salt ...'
    },
];

module.exports = {
    keys,
    questions,
}