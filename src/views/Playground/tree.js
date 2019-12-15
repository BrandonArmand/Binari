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

let tree = new Node(10)
let drawQ = [tree]
let layerQ = []
let layer = 0

drawQ.forEach((el,i)=>{
    if(el.left){
        el.left.x = el.x - 50
        el.left.y = el.y + 20
        layerQ.push(el.left)
    }
    if(el.right){
        el.right.x = el.x - 50
        el.left.y = el.y + 20
        layerQ.push(el.right)
    }
    //el.draw()
    if(!drawQ[i+1]){
        layer++
        drawQ.push(...layerQ)
        layerQ = []
    }
})