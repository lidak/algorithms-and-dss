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
  }

  insertAfter() {
  }

  removeItem() {
  }
};