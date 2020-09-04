export default `
/****************************************************************
 * Initialize the binary tree on the right.
 *
 * @param value (int)
 * 
 * @method insert
 * * Nothing, yet
 * *
 * * @param newValue (int)
 * 
 *****************************************************************/
function Node(value){
    this.left = null
    this.right = null
    this.value = value

    this.insert = function(newValue){
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
}

let tree = new Node(50)
tree.insert(25)
tree.insert(15)
tree.insert(64)
tree.insert(55)
tree.insert(40)
tree.insert(70)
`;
