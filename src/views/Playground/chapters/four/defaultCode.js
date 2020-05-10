export default `
/****************************************************************
 * Initialize and traverse the binary tree on the right in Breadth-First Search manner
 *
 * @param tree (Node)
 * 
 * @method levelOrder
 * * Traverses the BST in BFS manner using iterative method
 * *
 * * @param tree (Node)
 * 
 *****************************************************************/
function Node(value) {
    this.left = null
    this.right = null
    this.value = value
    
    this.insert = function(newValue) {
        if (newValue < this.value) {
            if(this.left == null) {
                this.left = new Node(newValue)
            }
            else {
                this.left.insert(newValue)
            }
        }
        else if (newValue > this.value) {
            if (this.right == null) {
                this.right = new Node(newValue)
            }
            else {
                this.right.insert(newValue)
            }
        }
    }

    this.levelOrder = function(tree) {
        var queue = new Array()
        queue.push(tree)
        while (queue.length) {
            var currNode = queue[0]
            queue = queue.slice(1)      //equivalent to pop in queue
            console.log(currNode.value)
            if (currNode.left != null) {
                queue.push(currNode.left)
            }
            if (currNode.right != null) {
                queue.push(currNode.right)
            }
        }
    }
}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

console.log("Level-Order (or Breadth-First Search) Traversal")
tree.levelOrder(tree)
`;
