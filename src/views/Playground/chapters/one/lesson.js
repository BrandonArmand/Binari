export default `
# Insertion
## Fundamentals
- We begin from the root node. Compare the new value with the value of the root node. 
- If the new value is lesser than that of the root, we move to the left subtree.
- Similarly, if the new value is greater than that of the root, we move to the right subtree.
- This process is repeated until we reach to a leaf node(i.e. node with no child).
- Based on the leaf node, insert the new value to left or right.
- This will not insert a node if a node with same value is present.
`;  
