const chai = require('chai');
const expect = chai.expect;
const traverseTree = require('./');


describe('Traverse tree function', () => {
  it('Should call callback for every of tree nodes', () => {
    const tree = {
      value: 1,
      children: [
        {
          value: 2,
          children: []
        }, {
          value: 99,
          children: [
            {
              value: 100,
              children: []
            }
          ]
        }
      ]
    };

    const resultArray = [];

    function callback (node) {
      resultArray.push(node.value);
    }

    traverseTree(tree, callback);

    expect(resultArray.sort((a, b) => (a > b))).to.eql([1, 2, 99, 100]);
  })
});