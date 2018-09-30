module.exports = class TreeNode {
  constructor({left = null, right = null, value} = {}) {
    if (typeof value === 'number') {
      this.value = value;
    } else {
      throw new TypeError('Node can not be instantiated without value passed');
    }

    this._throwIfIncorrectAssignmentAttempt(left, right);
    this._setPropIfNodeInstance('_left', left);
    this._setPropIfNodeInstance('_right', right);
  }

  _setPropIfNodeInstance(prop, value) {
    if(value instanceof TreeNode || value === null) {
      this[prop] = value;
    } else {
      console.warn(`TreeNode instance ${prop} should be another TreeNode instance or null.`);

      if (typeof this[prop] === 'undefined') {
        this[prop] = null;
      }
    }
  }

  _throwIfIncorrectAssignmentAttempt(left, right) {
    if (left !== null && left.value >= this.value) {
      throw new TypeError('Left should be less then self value.');
    }

    if (right !== null && right.value < this.value) {
      throw new TypeError('Right should be more or equal then self value.');
    }

    if ((!left instanceof TreeNode && left !== null) || (!right instanceof TreeNode && right !== null)) {
      throw new TypeError('Left/right can be TreeNode instance or null only');
    }
  }

  set left(value) {
    this._throwIfIncorrectAssignmentAttempt(value, this._right);
    this._setPropIfNodeInstance('_left', value);
  }

  set right(value) {
    this._throwIfIncorrectAssignmentAttempt(this._left, value);
    this._setPropIfNodeInstance('_right', value);
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }
};