class Node {
  constructor({value, prev = null}) {
    this.value = value;
    this.prev = prev
  }
}

module.exports = class Stack {
  constructor() {
    this.last = null;
  }

  get size() {
    let last = this.last;
    let result = 0;

    while(last !== null) {
      result++;
      last = last.prev;
    }

    return result;
  }

  get isEmpty() {
    return this.last === null;
  }

  push(value) {
    const node = new Node({value});

    node.prev = this.last;
    this.last = node;
  }

  pop() {
    let oldLast = this.last;

    if(oldLast !== null) {
      this.last = oldLast.prev;
      return oldLast.value;
    }
  }
};