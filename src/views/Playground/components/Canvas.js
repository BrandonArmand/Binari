import React from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";
import {setup, setTree, draw} from "./helpers"

const Canvas = props => {
    /*Array of all nodes*/
    var nodeList;
    /*All nodes represented as a reference to the root node*/
    let tree = props.tree;

    setTree(tree,  nodeList); 

    return <Sketch setup={setup} draw={draw} />;
};

Canvas.propTypes = {
    tree: PropTypes.any,
};

export default Canvas;