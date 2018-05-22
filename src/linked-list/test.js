const chai= require('chai');
const expect = chai.expect;
const LinkedList = require('./');

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe('LinkedList', () => {
  it('Should have amount 0 if no cells were added', () => {
    expect(list.amount).to.equal(0);
  });

  it('Should be able to push cells', () => {
    expect(list.head).to.equal(null);
    list.push(5);
    expect(list.head.value).to.equal(5);
  });

  it('Should provide correct `next` property work', () => {
    list.push(5);
    list.push(10);
    list.push(20);

    expect(list.head.value).to.equal(5);
    expect(list.head.next.value).to.equal(10);
    expect(list.head.next.next.value).to.equal(20);
  });

  it('Should call callback function with every cell when passed into iterate method', () => {
    const arr = [];
    const firstCellValue = 10;
    const secondCellValue = 20;

    function cb (cell) {
      arr.push(cell.value);
    }

    list.push(firstCellValue);
    list.push(secondCellValue);

    list.iterate(cb);

    expect(arr).to.eql([firstCellValue, secondCellValue]);
  });

  it('Pop method should remove cell from the end', () => {
    const firstValue = 5;
    const secondValue = 10;
    const thirdValue = 20;

    list.push(firstValue);
    list.push(secondValue);
    list.push(thirdValue);

    expect(list.tail.value).to.equal(thirdValue);
    list.pop();
    expect(list.tail.value).to.equal(secondValue);
    list.pop();
    expect(list.tail.value).to.equal(firstValue);
    expect(list.tail).to.equal(null);
  });
});