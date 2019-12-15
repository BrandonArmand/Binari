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
  let size = 25
  let x = 220
  let y = 16
  var ix = 0
  let margin = 50;
  let tree = new Node(5)
  tree.x = x
  tree.y = y

  function setup(p5, canvasParentRef) {
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  function draw(p5){
    p5.fill(255)
    
    while(ix < 10){

      let left = x + size - margin
      let right = x - size + margin
      let down = y + size
      p5.line(right, down, x, y);
      p5.line(left, down, x, y);
      p5.ellipse(x, y, 10)
      p5.ellipse(right, down, 10)
      p5.ellipse(left, down, 10)
      if(Math.round(Math.random())){
        x = left
      }
      else{
        x = right
      }
      y = down
      ix++;
    }
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
