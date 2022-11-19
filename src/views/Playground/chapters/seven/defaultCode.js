export default `
/****************************************************************
 * Initialize the binary tree on the right and finds the Depth of the tree
 *
 * @param tree (Node)
 * 
 * @method getDiameter
 * * Finds the diameter of binary tree using recursive method
 * *
 * * @param tree (Node)
 * 
 *****************************************************************/
function Node(value) {
    this.left = null
    this.right = null
    this.value = value
    this.diameter = 0
    
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

    this.getDiameter = function(tree) {
        if (tree == null) {
            return 0
        }
        let leftDepth = this.getDiameter(tree.left)
        let rightDepth = this.getDiameter(tree.right)

        this.diameter = Math.max(this.diameter, leftDepth + rightDepth + 1);
        
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

let depth = tree.getDiameter(tree)
console.log("Diameter of the tree = " + tree.diameter)
`;
