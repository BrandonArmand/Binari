export default `
# Depth-First Search
## Fundamentals
Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. There are 3 types of Tree traversals through DFS using recursion:
- ** Preorder Traversal: **
Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get [prefix expression](http://en.wikipedia.org/wiki/Polish_notation)(or Polish notation) of an expression tree.

- ** Inorder Traversal: **
In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal's reversed can be used.

- ** Postorder Traversal: **
Postorder traversal is used to delete the tree.  Postorder traversal is also useful to get the [postfix expression](http://en.wikipedia.org/wiki/Reverse_Polish_notation)(or reverse Polish notation) of an expression tree.

## Algorithms
- ** Preorder Traversal: **
1. Visit the root.
2. Traverse the left subtree, i.e., call Postorder(left-subtree)
3. Traverse the right subtree, i.e., call Postorder(right-subtree)

- ** Inorder Traversal: **
1. Traverse the left subtree, i.e., call Postorder(left-subtree)
2. Visit the root.
3. Traverse the right subtree, i.e., call Postorder(right-subtree)

- ** Postorder Traversal: **
1. Traverse the left subtree, i.e., call Postorder(left-subtree)
2. Traverse the right subtree, i.e., call Postorder(right-subtree)
3. Visit the root.
`;
