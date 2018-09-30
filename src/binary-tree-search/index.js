const TreeNode = require('./treeNode');

module.exports = class BinaryTree {
  constructor(value) {
    if(typeof value === 'number') {
      this.root = new TreeNode({value});
    }
  }

  add(value) {
    let target = this.root;
    let direction;
    let parent;

    while(target !== null) {
      if (value < target.value) {
        direction = 'left';
      } else {
        direction = 'right';
      }

      parent = target;
      target = target[direction];
    }

    parent[direction] = new TreeNode({value});

  }

  remove(value) {

  }
};