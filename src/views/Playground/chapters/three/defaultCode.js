export default `
/****************************************************************
 * Initialize and traverse the binary tree on the right in Depth-First Search manner
 *
 * @param tree (Node)
 * 
 * @method search
 * * Searches values in the BST using a recursive method
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

    this.preorder = function(tree) {
        if (tree == null) {
            return
        }
        console.log(tree.value)
        this.preorder(tree.left)
        this.preorder(tree.right)
    }

    this.inorder = function(tree) {
        if (tree == null) {
            return
        }
        this.inorder(tree.left)
        console.log(tree.value)
        this.inorder(tree.right)
    }

    this.postorder = function(tree) {
        if (tree == null) {
            return
        }
        this.postorder(tree.left)
        this.postorder(tree.right)
        console.log(tree.value)
    }

}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

console.log("Preorder Traversal:")
tree.preorder(tree)

console.log("Inorder Traversal:")
tree.inorder(tree)

console.log("Postorder Traversal:")
tree.postorder(tree)
`;
