//Nice but not Browser Nice Code
class Nodex{
    left = null
    right = null

    constructor(value){
        this.value = value
    }

    insert(value){
        if(value <= this.value){
            if(this.left == null){
                this.left = new Node(value)
            }
            else{
                this.left.insert(value)
            }
        }
        else{
            if(this.right == null){
                this.right = new Node(value)
            }
            else{
                this.right.insert(value)
            } 
        }
    }
}


//Browser Nice
// + String for avoiding code compression
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
}`)