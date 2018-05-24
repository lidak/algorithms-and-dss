class Cell {
  constructor({value, next = null}) {
    this.value = value;
    this.next = next;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  get amount() {
    let result = 0;

    this.iterate(() => {result++;});

    return result;
  }

  get tail() {
    if(this.head === null) {
      return this.head;
    }

    let result = this.head;
    while(result.next !== null) {
      result = result.next;
    }

    return result;
  }

  iterate(callback) {
    let cell = this.head;

    while(cell !== null) {
      callback(cell);
      cell = cell.next;
    }
  }

  push(value) {
    const cell = new Cell({value, next: null});

    if(this.head === null) {
      this.head = cell;
      return;
    }

    this.tail.next = cell;
  }

  pop() {
    let cell = this.head;

    // The list is empty
    if(cell === null) return;

    // The list contains one Cell
    if(cell.next === null) {
      this.head = null;
      return;
    }

    while(cell.next.next !== null) {
      cell = cell.next;
    }

    cell.next = null;
  }

  insertAfter(valueToInsertAfter, valueToInsert) {
    let cellToInsertAfter = this.head;
    const newCell = new Cell({value: valueToInsert});

    while(cellToInsertAfter!== null && cellToInsertAfter.value !== valueToInsertAfter) {
      // The end of the list is reached
      console.log(JSON.stringify(cellToInsertAfter, null, 2));
      cellToInsertAfter = cellToInsertAfter.next;
    }

    if(cellToInsertAfter === null) {
      console.error(`There's no ${valueToInsert} value in the list`);
      return false;
    }

    let intNextCell = cellToInsertAfter.next;

    cellToInsertAfter.next = newCell;
    newCell.next = intNextCell;
    return true;
  }

  removeItem(valueToRemove) {
    let cellToRemove = this.head;
    let beforeToRemove = null;

    while(cellToRemove.value !== valueToRemove) {
      beforeToRemove = cellToRemove;
      cellToRemove = cellToRemove.next;

      if(cellToRemove === null) return false;
    }

    beforeToRemove.next = cellToRemove.next;
    return true;
  }
};