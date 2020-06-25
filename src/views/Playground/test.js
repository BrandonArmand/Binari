/**
 * Basic validation tests to run on all tree implementations
 */
let test = node => {
  let BinaryTree = new node.Node(50);
  let tree = node.tree;

  if (typeof tree.left === "undefined") {
    throw { name: "ReferenceError", message: "tree.left is not defined" };
  }
  if (typeof tree.right === "undefined") {
    throw { name: "ReferenceError", message: "tree.right is not defined" };
  }
  if (typeof tree.value === "undefined") {
    throw { name: "ReferenceError", message: "tree.value is not defined" };
  }
  if (typeof BinaryTree.left === "undefined") {
    throw { name: "ReferenceError", message: "Node.left is not defined" };
  }
  if (typeof BinaryTree.right === "undefined") {
    throw { name: "ReferenceError", message: "Node.right is not defined" };
  }
  if (typeof BinaryTree.value === "undefined") {
    throw { name: "ReferenceError", message: "Node.value is not defined" };
  }

  BinaryTree.insert(25);
  BinaryTree.insert(15);
  BinaryTree.insert(35);
  BinaryTree.insert(75);
  BinaryTree.insert(85);
  BinaryTree.insert(65);
};

export default test;
