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

  minimal(node) {
    let minValue = node.data;
    while (node.left) {
      minValue = node.left.data;
      node = node.left;
    }
    return minValue;
  }

  delete(value, node = this.root) {
    if (node == null) return node;
    if (value < node.data) {
      node.left = this.delete(value, node.left);
    } else if (value > node.data) {
      node.right = this.delete(value, node.right);
    } else {
      if (node.left == null && node.right == null) {
        return null;
      } else if (node.left && node.right == null) {
        return node.left;
      } else if (node.left == null && node.right) {
        return node.right;
      } else {
        const min = this.minimal(node);
        this.delete(min, node);
        node.data = min;
      }
    }
    return node;
  }

  height(node = this.root) {
    if (node == null) return 0;
    else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      if (leftHeight > rightHeight) return leftHeight + 1;
      else return rightHeight + 1;
    }
  }

  getCurrentLevel(level, node, result) {
    if (node == null) return;
    if (level == 1) {
      result.push(node.data);
    } else if (level > 1) {
      this.getCurrentLevel(level - 1, node.left, result);
      this.getCurrentLevel(level - 1, node.right, result);
    }
  }

  levelOrder(callback, node = this.root) {
    const result = [];
    const h = this.height(node);
    for (let i = 1; i <= h; i++) {
      this.getCurrentLevel(i, node, result);
    }
    if (!callback) return result;
    else return result.map(callback);
  }

  inorder(callback, node = this.root, result = []) {
    if (node) {
      this.inorder(callback, node.left, result);
      if (!callback) result.push(node.data);
      else result.push(callback(node.data));
      this.inorder(callback, node.right, result);
    }
    return result;
  }

  preorder(callback, node = this.root, result = []) {
    if (node == null) return;
    if (!callback) result.push(node.data);
    else result.push(callback(node.data));
    this.preorder(callback, node.left, result);
    this.preorder(callback, node.right, result);
    return result;
  }
}

export default Tree;
