const expect = require('chai').expect;

const TreeNode = require('./treeNode');
const BinaryTree = require('./');

describe('Node class', () => {
  it('Should throw an error when no-value node instantiated.', () => {
    expect(() => {new TreeNode()}).to.throw(/^Node can not be instantiated .*/);
  });

  it('Left/right value can not be set to value different that Node instance or null', () => {
    const node = new TreeNode({
      value: 1,
      right: 5
    });

    expect(node.right).to.equal(null);
  });

  it('Should set correct left/right values if they\'re instances of treeNode of null', () => {
    const left = new TreeNode({value: 6});
    const right = new TreeNode({value: 8});
    const node  = new TreeNode({left, right, value: 7});

    expect(node.right).to.equal(right);
    expect(node.left).to.equal(left);
  });

  it('Right value can\'t be set to less then self value', () => {
    const value = 5;
    const right = new TreeNode({value: value - 1});
    const nodeCreatingFunction = () => {new TreeNode({value, right});};

    expect(nodeCreatingFunction).to.throw('Right should be more or equal then self value.');
  })
});

describe('BinaryTree class', () => {
  it('Should set new TreeNode as a root if value passed during instantiations', () => {
    const tree = new BinaryTree(5);

    expect(tree.root.value).to.equal(5);
  });

  it('Should add items correctly', () => {
    const tree = new BinaryTree(8);

    tree.add(7);
    tree.add(2);
    tree.add(0);

    expect(tree.root.left.left.left.value).to.equal(0);

    tree.add(10);
    tree.add(8);
    tree.add(9);

    expect(tree.root.right.left.right.value).to.equal(9);
  })
});