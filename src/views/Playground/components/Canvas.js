import React from "react";
import Sketch from 'react-p5'

export default function Canvas(props){
    const elementScale = window.devicePixelRatio < 2 ? 2 : window.devicePixelRatio
    const windowSize = elementScale * 500
    const treeSize = props.size

    let tree = props.tree
        tree.x = windowSize / 2
        tree.y = (20 * elementScale)
    let drawQ = [tree]
    let layerQ = []
    let layer = 1

    for (var i = 0; i < treeSize; i++) {
        tree.insert(Math.floor(Math.random() * 100));
    }

    function setup(p5, canvasParentRef) {
        p5.textSize((12 * elementScale))
        p5.createCanvas(windowSize, 1000).parent(canvasParentRef)
        p5.frameRate(200)
    }

    function draw(p5){
        drawQ.forEach((el,i)=>{
            let distanceX = ((windowSize / 2.4) / p5.pow(2, layer)) + 12
            let distanceY = (20 * elementScale) + (layer * 9)

            layer == 1 && p5.background('white')
            p5.strokeWeight(elementScale + 1)
            p5.stroke(0)

            if(el.left){
                el.left.x = el.x - distanceX
                el.left.y = el.y + distanceY
                p5.line(el.x, el.y, el.left.x, el.left.y);
                layerQ.push(el.left)
            }

            if(el.right){
                el.right.x = el.x + distanceX
                el.right.y = el.y + distanceY
                p5.line(el.x, el.y, el.right.x, el.right.y);
                layerQ.push(el.right)
            }

            p5.textAlign(p5.CENTER);
            p5.stroke(0)
            p5.strokeWeight(1)
            p5.fill(p5.map(el.value,100,0,0,255),220,250);
            p5.ellipse(el.x, el.y, (17 * elementScale))
            p5.noStroke()
            p5.fill('black')
            p5.text(el.value, el.x, el.y + (6 + elementScale));

            if(!drawQ[i+1]){
                layer++
                drawQ = [...layerQ]
                layerQ = []
            }
        })
    }

    return <Sketch setup={setup} draw={draw} />
}