import Tree from './tree.js';
import prettyPrint from './pretty.js';

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(testArr);
//prettyPrint(tree.root);

//console.log(tree);
// console.log(tree.find(4));
// console.log(tree.find(3));
// console.log(tree.find(67));
// console.log(tree.find(667));
tree.insert(14);
tree.insert(25);
//prettyPrint(tree.root);

//tree.delete(67);
prettyPrint(tree.root);
console.log(`Tree height is ${tree.height()}.`);
console.log(`Level order ${tree.levelOrder()}.`);

function double(n) {
  return n * 2;
}

console.log(`Level order ${tree.levelOrder(double)}.`);
console.log(`Inorder ${tree.inorder()}.`);
console.log(`Inorder ${tree.inorder(double)}.`);
