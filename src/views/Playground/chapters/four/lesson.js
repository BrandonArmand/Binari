export default `
# Breadth-First Search
## Fundamentals
Trees can also be traversed in level-order, where we visit every node on a level before going to a lower level. This search is referred to as breadth-first search (BFS), as the search tree is broadened as much as possible on each depth before going to the next depth. A queue is used for level order traversal of a BST (or any tree).
- ** Algorithm for Level Order Traversal: **
1. Push the root in the queue.
2. Pop the front element i.e. currNode. 
3. Push the left and right nodes of this node if they exist
4. Repeat steps 2 and 3 till the queue becomes empty.
`;
