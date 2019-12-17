export default class Node{
    left = null
    right = null
    x = null
    y = null

    constructor(value){
        this.value = value
    }

    insert(value){
        if(value <= this.value){
            if(this.left == null){
                this.left = new Node(value)
                this.left.x = this.x - 50
                this.left.y = this.y + 20
            }
            else{
                this.left.insert(value)
            }
        }
        else{
            if(this.right == null){
                this.right = new Node(value)
                this.right.x = this.x - 50
                this.right.y = this.y + 20
            }
            else{
                this.right.insert(value)
            } 
        }
    }
}