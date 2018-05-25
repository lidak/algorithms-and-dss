const chai = require('chai');
const expect = chai.expect;
const Stack = require('./');

let stack;
const firstNodeValue = 5;
const secondNodeValue = 6;
const thirdNodeValue = 7;


describe('Stack class', () => {
  beforeEach(() => {
    stack = new Stack()
  });

  describe('push method', () => {
    it('Should add nodes to empty stack', () => {
      stack.push(firstNodeValue);
      expect(stack.last.value).to.equal(firstNodeValue);
    });

    it('Should set correct prev link', () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);

      expect(stack.last.prev.value).to.equal(firstNodeValue);
    });
  });

  describe('size prop', () => {
    it('Should return 0 for empty stack', () => {
      expect(stack.size).to.equal(0);
    });

    it('Should return nodes amount for not empty stack', () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);
      stack.push(thirdNodeValue);

      expect(stack.size).to.equal(3);
    })
  });

  describe('pop method', () => {
    it('Should do nothing for empty list', () => {
      const lastSnapshotBeforePop = JSON.stringify(this.last);
      stack.pop();
      const lastSnapshotAfterPop = JSON.stringify(this.last);

      expect(lastSnapshotBeforePop).to.equal(lastSnapshotAfterPop);
    });

    it('Should return last pushed value for non empty stack', () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);
      stack.push(thirdNodeValue);

      const resultOfPop = stack.pop();

      expect(resultOfPop).to.equal(thirdNodeValue);
    });

    it('Should remove last value', () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);

      stack.pop();

      expect(stack.last.value).to.equal(firstNodeValue);
    });
  });
});