import React from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";
import { setTree, setup, draw } from "../helpers";

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
    return <Sketch setup={setup} draw={draw} />;
};

Canvas.propTypes = {
    tree: PropTypes.any,
};

export default Canvas;
