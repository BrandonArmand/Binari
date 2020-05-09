export default `
# Check Balance
## Fundamentals
A balanced tree is a kind of a tree where for every subtree the maximum distance from the root to any leaf is at most bigger by one than the minimum distance from the root to any leaf. In simple terms, the difference between heights of left and right subtree should be less than or equal to 1 for the tree to be balanced.
- ** Algorithm to check if the tree is balanced: **
1. Return true if tree is empty (an empty tree is balanced).
2. Find max depth (or height) of left and right subtrees by calling getDepth() for both subtrees.
3. Return true if difference between heights is less than or equal to 1, else false.
4. Recur for left and right subtrees to check individual balances.
`;
