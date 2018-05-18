const calcGCD = require('../greatest-common-divisor');

module.exports = (a, b) => {
  const GCD = calcGCD(a, b);
  const result = a * b / GCD;

  return result;
};