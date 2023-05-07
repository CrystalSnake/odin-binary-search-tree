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
prettyPrint(tree.root);

tree.delete(67);
prettyPrint(tree.root);
