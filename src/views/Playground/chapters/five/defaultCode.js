export default `
/****************************************************************
 * Initialize the binary tree on the right and finds the Depth of the tree
 *
 * @param tree (Node)
 * 
 * @method getDepth
 * * Finds the max depth of binary tree using recursive method
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

    this.getDepth = function(tree) {
        if (tree == null) {
            return 0
        }
        let leftDepth = this.getDepth(tree.left)
        let rightDepth = this.getDepth(tree.right)
        return 1 + Math.max(leftDepth, rightDepth)
    }
}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

let depth = tree.getDepth(tree)
console.log("Depth of the tree = " + depth)
`;
