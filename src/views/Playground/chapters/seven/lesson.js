export default `
# Get Diameter
## Fundamentals
The diameter of a binary tree is the number of nodes along the longest path between any two nodes. In other words, it is the maximum distance between any two nodes in a tree.
- ** Intuition: **
Return depth and compute diameter for every node in a tree, And keep updating the diameter (class variable).

- ** Algorithm for Diameter of a BST (or any binary tree): **
1. Return 0 if current node is null.
2. Else find the depth of its left and right subtrees recursively
3. Compute the diameter passing through current node i.e (1 + farthest node on left subtree + farthest node on right subtree)
4. Keep updating the diameter (class variable) if for any node, computed diameter is greater than existing value of diameter
5. Return 1 + maximum of depth of left and right subtrees.
`;
