import React from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";
import { setTree, positionNode, setup, draw } from "../helpers";

const Canvas = props => {
    /*All nodes represented as a reference to the root node*/
    let tree = props.tree;
    setTree();

    //Generate all position and layer data
    positionNode(tree, 1, 1);
    return <Sketch setup={setup} draw={draw} />;
};

Canvas.propTypes = {
    tree: PropTypes.any,
};

export default Canvas;
