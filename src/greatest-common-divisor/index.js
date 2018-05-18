// Euclids algorithm implementation
module.exports = (a, b) => {
  let divisor = 1;

  if(b > a) {
    // Swap a and b values
    b = [a, a = b][0];
  }

  while(divisor > 0) {
    divisor = a % b;
    a = b;
    b = divisor;
  }

  return a;
};
