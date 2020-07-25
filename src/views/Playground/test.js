/**
 * Basic validation tests to run on all tree implementations
 */
let test = (node) => {
    let BinaryTree = new node.Node(50);
    let tree = node.tree;

    if (typeof tree.left === "undefined") {
        throw ReferenceError("tree.left is not defined");
    }
    if (typeof tree.right === "undefined") {
        throw ReferenceError("tree.right is not defined");
    }
    if (typeof tree.value === "undefined") {
        throw ReferenceError("tree.value is not defined");
    }
    if (typeof BinaryTree.left === "undefined") {
        throw ReferenceError("Node.left is not defined");
    }
    if (typeof BinaryTree.right === "undefined") {
        throw ReferenceError("Node.right is not defined");
    }
    if (typeof BinaryTree.value === "undefined") {
        throw ReferenceError("Node.value is not defined");
    }

    BinaryTree.insert(25);
    BinaryTree.insert(15);
    BinaryTree.insert(35);
    BinaryTree.insert(75);
    BinaryTree.insert(85);
    BinaryTree.insert(65);
};

export default test;
