export default class Node{
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