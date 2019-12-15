import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AceEditor from "react-ace";
import Sketch from 'react-p5'
import styles from "assets/jss/material-kit-react/views/playground.js";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";

const useStyles = makeStyles(styles);

class Node{
  left = null
  right = null
  x = null
  y = null

  constructor(value){
    this.value = value
  }

  insert(value){
    let node = this
    while(node){
      if(value <= this.value){
        if(this.left == null){
          this.left = new Node(value)
          break
        }
        else{
          node = this.left
        }
      }
      else{
        if(this.right == null){
          this.right = new Node(value)
          break
        }
        else{
          node = this.right
        }
      }
    }
  }
}

var ix = 0

export default function Playground(props) {
  const classes = useStyles();
  const size = 25
  let x = 220
  let y = 10
  
  function setup(p5, canvasParentRef) {
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }
  function draw(p5){

    p5.fill(255)

    while(ix < 10){
      let left = x + size
      let right = x - size
      let down = y + size
      p5.line(right, down, x, y);
      p5.line(left, down, x, y);
      p5.ellipse(x, y, 10)
      if(Math.random() * 100 > 25){
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
