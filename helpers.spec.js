const expect = require('chai').expect;
const { keys } = require('./constants');
const { makeHash } = require('./helpers');

const mockAnswer = {
    [keys.PHRASE]: 'random phrase',
    [keys.GROUP]: 'random group',
    [keys.PASSWORD]: 'random password',
}

describe('makeHash', () => {
    it('should be pure function', () => {
        const firstHash = makeHash(mockAnswer);
        const secondHash = makeHash(mockAnswer);
        expect(firstHash).to.equal(secondHash);
    });
});