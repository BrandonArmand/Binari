import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AceEditor from "react-ace";
import Sketch from 'react-p5'
import styles from "assets/jss/material-kit-react/views/playground.js";
import Node from './tree'
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";

const useStyles = makeStyles(styles);

export default function Playground(props) {
  const classes = useStyles();
  let tree = new Node(50)
  tree.x = 220
  tree.y = 16
  let drawQ = [tree]
  let layerQ = []
  let layer = 0

  function setup(p5, canvasParentRef) {
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  for (var i = 0; i < 25; i++) {
    tree.insert(Math.floor(Math.random() * 100));
  }

  function draw(p5){
    drawQ.forEach((el,i)=>{
        if(el.left){
            el.left.x = el.x - 50
            el.left.y = el.y + 20
            p5.stroke(0)
            p5.line(el.x, el.y, el.left.x, el.left.y);
            layerQ.push(el.left)
        }
        if(el.right){
            el.right.x = el.x + 50
            el.right.y = el.y + 20
            p5.stroke(0)
            p5.line(el.x, el.y, el.right.x, el.right.y);
            layerQ.push(el.right)
        }
        p5.textAlign(p5.CENTER);
        p5.noStroke()
        p5.ellipse(el.x, el.y, 20)
        p5.text(el.value, el.x, el.y + 5);

        if(!drawQ[i+1]){
            layer++
            drawQ = [...layerQ]
            layerQ = []
        }
    })
  }

  return (
    <>
      <div className={classes.margin}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                <AceEditor
                  mode="javascript"
                  theme="twilight"
                  name="code"
                  width="100%"
                  height="1000px"
                  enableBasicAutocompletion={true}
                  enableLiveAutocompletion={true}
                  editorProps={{ $blockScrolling: false }}
                />
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <h1>Binary Trees</h1>
                  <h2>Introduction</h2>
                  <Sketch setup={setup} draw={draw} />
                  <h2>Chapter 1: Initialization</h2>
                </GridItem>
            </GridContainer>
            </div>
        </div>
      </div>
    </>
  );
}
