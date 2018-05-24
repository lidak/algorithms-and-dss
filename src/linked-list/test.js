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
    list.pop();
    expect(list.tail).to.equal(null);
  });

  describe('insertAfter method', () => {
    const firstValue = 5;
    const secondValue = 10;
    const valueToInsert = 30;

    it('should return false when trying to insert after not existed value', () => {
      const notExistedValue = 99;

      list.push(firstValue);
      list.push(secondValue);

      const failResult = list.insertAfter(notExistedValue, valueToInsert);

      expect(failResult).to.equal(false);
      expect(list.amount).to.equal(2);
    });

    it('has to insert new Cell after one with specified value', () => {
      const thirdValue = 20;

      list.push(firstValue);
      list.push(secondValue);
      list.push(thirdValue);

      list.insertAfter(secondValue, valueToInsert);

      expect(list.head.next.next.value).to.equal(valueToInsert);
      expect(list.tail.value).to.equal(thirdValue);
    });
  });

  describe('removeItem method', () => {
    const firstValue = 1;
    const existedValue = 2;
    const notExistedValue = 3;


    it('should return true if passed value is removed', () => {
      list.push(firstValue);
      list.push(existedValue);

      const result = list.removeItem(existedValue);
      expect(result).to.equal(true);
    });

    it('should remove item from the list if one exist', () => {
      list.push(firstValue);
      list.push(existedValue);

      expect(list.head.next.value).to.equal(existedValue);
      list.removeItem(existedValue);
      expect(list.head.next).to.equal(null);
    });

    it('should not effect list for not existed value', () => {
      list.push(firstValue);
      list.push(existedValue);

      list.removeItem(notExistedValue);
      expect(list.head.value).to.equal(firstValue);
      expect(list.head.next.value).to.equal(existedValue);
      expect(list.head.next.next).to.equal(null);
    });
  })
});