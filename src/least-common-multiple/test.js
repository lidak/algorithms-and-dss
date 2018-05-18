const chai = require('chai');
const expect = chai.expect;
const calcMultiple = require('./');

cases = [
  {a: 6, b: 4, result: 12},
  {a: 21, b: 6, result: 42},
  {a: 48, b: 180, result: 720}
];

describe('Least common multiple function', () => {
  it('Should return correct values for series of cases', () => {
    cases.forEach(({a, b, result}) => {
      expect(calcMultiple(a, b)).to.equal(result);
    });
  })
});
