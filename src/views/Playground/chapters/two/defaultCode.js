export default `
/****************************************************************
 * Initialize and search the binary tree on the right.
 *
 * @param value (int)
 * 
 * @method search
 * * Searches values in the BST using a recursive method
 * *
 * * @param tree (Node)
 * * @param key (int)
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

this.search = function(tree, key) {
    if (tree == null || tree.value == key) {
        return tree
    } 
    if (key < tree.value) {
        return this.search(tree.left, key)
    }
    return this.search(tree.right, key)
}

}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

let isPresent = tree.search(tree, 25)
isPresent == null ? console.log("Not Present") : console.log("Present")
`;
