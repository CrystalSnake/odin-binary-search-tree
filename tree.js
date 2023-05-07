import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = this.buildTree(this.sortAndRemoveDoubles(array));
  }

  sortAndRemoveDoubles(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  buildTree(array) {
    if (array.length == 0) return null;
    const middle = Math.floor(array.length / 2);
    return new Node(
      array[middle],
      this.buildTree(array.slice(0, middle)),
      this.buildTree(array.slice(middle + 1))
    );
  }

  find(value, node = this.root) {
    if (node == null) return null;
    if (node.data == value) {
      return node;
    } else if (node.data > value) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  insert(value, node = this.root) {
    if (node == null) return new Node(value);
    if (value > node.data) {
      node.right = this.insert(value, node.right);
    } else if (value < node.data) {
      node.left = this.insert(value, node.left);
    }
    return node;
  }
}

export default Tree;
