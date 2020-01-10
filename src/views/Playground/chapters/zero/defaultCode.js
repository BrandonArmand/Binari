export default (`
/****************************************************************
 * Initialize the binary tree on the right.
 *
 * @param value (int)
 * 
 * @method insert
 * * Inserts values in the correct leaf using a recursive method
 * *
 * * @param newValue (int)
 * 
 *****************************************************************/
function Node(value){
this.left = null
this.right = null
this.value = value

this.insert = function(newValue){
    if(newValue <= this.value){
        if(this.left == null){
            this.left = new Node(newValue)
        }
        else{
            this.left.insert(newValue)
        }
    }
    else{
        if(this.right == null){
            this.right = new Node(newValue)
        }
        else{
            this.right.insert(newValue)
        } 
    }
}
}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(35)
    tree.insert(75)
    tree.insert(85)
    tree.insert(65)

for (var i = 0; i < 14; i++) {
    tree.insert(Math.floor(Math.random() * 100));
}
`)