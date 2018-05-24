function traverseTree(tree, callback) {
  callback(tree);

  if(tree.children.length) {
    tree.children.forEach((child) => {
      traverseTree(child, callback)
    });
  }
}

module.exports = traverseTree;