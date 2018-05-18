const chai= require('chai');
const expect = chai.expect;
const calcDivisor = require('./');

describe('Greatest possible divisor function', () => {
  it('Should return correct value', () => {
    expect(calcDivisor(36, 45)).to.equal(9);
    expect(calcDivisor(22500, 1125)).to.equal(1125);
    expect(calcDivisor(27, 21)).to.equal(3);
  });
});