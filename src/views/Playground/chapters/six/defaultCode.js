export default `
/****************************************************************
 * Initialize the binary tree on the right and check if it is balanced
 *
 * @param tree (Node)
 * 
 * @method checkBalance
 * * Checks if the binary tree is balanced or not using recursive method
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

    this.checkBalance = function(tree) {
        if (tree == null) {
            return true
        }
        let ldepth = this.getDepth(tree.left)
        let rdepth = this.getDepth(tree.right)
        let diff = Math.abs(ldepth - rdepth)
        if (diff <= 1 && this.checkBalance(tree.left) && this.checkBalance(tree.right)) {
            return true
        }
        return false
    }
}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

let isBalanced = tree.checkBalance(tree)
isBalanced ? console.log("Tree is balanced") : console.log("Tree is not balanced")
`;
