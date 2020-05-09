export default `
# Get Depth
## Fundamentals
The maximum depth of a binary tree is the number of nodes from the root down to the furthest leaf node. In other words, it is the height of a binary tree.
- ** Algorithm for Depth of a BST (or any binary tree): **
1. Return 0 if current node is null.
2. Else find the depth of its left and right subtrees recursively
3. Return 1 + maximum of depth of left and right subtrees.
`;
