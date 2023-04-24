import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  sortAndRemoveDoubles(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  buildTree(array) {
    return null;
  }
}

export default Tree;
