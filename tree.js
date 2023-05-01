import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  sortAndRemoveDoubles(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  buildTree(array) {
    if (this.sortAndRemoveDoubles(array).length == 0) {
      return null;
    } else {
      const middle = Math.floor(this.sortAndRemoveDoubles(array).length / 2);
      return this.sortAndRemoveDoubles(array)[middle];
    }
  }
}

export default Tree;
