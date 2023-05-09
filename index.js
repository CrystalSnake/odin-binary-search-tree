import Tree from './tree.js';
import prettyPrint from './pretty.js';

function double(n) {
  return n * 2;
}

function getRandomArray(n, limit) {
  return Array(n)
    .fill()
    .map(() => Math.round(Math.random() * limit));
}

const randomTree = new Tree(getRandomArray(50, 10000));
prettyPrint(randomTree.root);
console.log(randomTree.isBalanced());
console.log(`Level order ${randomTree.levelOrder()}.`);
console.log(`Inorder ${randomTree.inorder()}.`);
console.log(`Preorder ${randomTree.preorder()}`);
console.log(`Postorder ${randomTree.postorder()}`);

getRandomArray(100, 1000).forEach((element) => randomTree.insert(element));
console.log(randomTree.isBalanced());
randomTree.rebalance();
console.log(randomTree.isBalanced());
console.log(`Level order ${randomTree.levelOrder()}.`);
console.log(`Inorder ${randomTree.inorder()}.`);
console.log(`Preorder ${randomTree.preorder()}`);
console.log(`Postorder ${randomTree.postorder()}`);
prettyPrint(randomTree.root);
