import React from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";

/*A map containing all custom colors name-value pairs*/
let customColors;

const Canvas = props => {
    const elementScale =
    window.devicePixelRatio < 2 ? 2 : window.devicePixelRatio;
    const windowSize = elementScale * 500;
    /*Array of all nodes*/
    var nodeList;
    /*All nodes represented as a reference to the root node*/
    let tree = props.tree;
    /*Offset of the root node from the top of the canvas relative to elementScale*/
    let top = 20;
    /*Space between the layers realative to elementScale*/
    let yDiff = 40;

    setTree();

    /**Add position, layer and order from left to right information to this node and all it's children**/
    function positionNode(node, layer, xOrder) {
        node.layer = layer;
        node.xOrder = xOrder;
        node.y = ((node.layer - 1) * yDiff + top) * elementScale;
        let xDiff = windowSize / Math.pow(2, layer - 1);
        node.x = xDiff * (xOrder - 0.5);
        nodeList.push(node);
        if (node.left != null) {
            positionNode(node.left, layer + 1, xOrder * 2 - 1);
        }
        if (node.right != null) {
            positionNode(node.right, layer + 1, xOrder * 2);
        }
    }

    function setup(p5, canvasParentRef) {
        p5.textSize(12 * elementScale);
        p5.createCanvas(windowSize, 1000).parent(canvasParentRef);
        p5.frameRate(100);
        setTree();
        setColors(p5);
    }

    function setTree() {
        nodeList = [];
        //Generate all position and layer data
        return positionNode(tree, 1, 1);
    }

    /**Fills the customColors map**/
    function setColors(p5) {
        //A color has a value and a darkText bool property to indicate whether the text rendered on it should be dark
        customColors = new Map([
            ["red", {value: p5.color("#F44336"), darkText: false,}],
            ["pink", {value: p5.color("#E91E63"), darkText: false,}],
            ["purple", {value: p5.color("#9C27B0"), darkText: false,}],
            ["blue", {value: p5.color("#2196F3"), darkText: true,}],
            ["cyan", {value: p5.color("#00BCD4"), darkText: true,}],
            ["green", {value: p5.color("#4CAF50"), darkText: true,}],
            ["yellow", {value: p5.color("#FFEB3B"), darkText: true,}],
            ["orange", {value: p5.color("#FF9800"), darkText: true,}]
        ]);
    }

    function draw(p5) {
        p5.background("white");
        nodeList.forEach(el => {
            //Draw lines to children
            p5.stroke("black");
            if (el.left != null) {
                p5.line(el.x, el.y, el.left.x, el.left.y);
            }
            if (el.right != null) {
                p5.line(el.x, el.y, el.right.x, el.right.y);
            }

            //Retrieve custom color
            let darkText = true;
            let color;
            let colorArg = customColors.get(el.color);

            //No custom color, draw the default one
            if (colorArg === undefined) {
                color = p5.color(p5.map(el.value, 100, 0, 0, 255), 220, 250);
            } else {
                color = colorArg.value;
                darkText = colorArg.darkText;
            }

            //Draw node
            p5.textAlign(p5.CENTER);
            p5.stroke(0);
            p5.strokeWeight(1);
            p5.fill(color);
            p5.ellipse(el.x, el.y, 17 * elementScale);
            p5.noStroke();
            p5.fill(darkText ? "black" : "white");
            if (el.value !== null) {
                p5.text(el.value, el.x, el.y + (6 + elementScale));
            }
        });
    }

    return <Sketch setup={setup} draw={draw} />;
};

Canvas.propTypes = {
    tree: PropTypes.any,
};

export default Canvas;
