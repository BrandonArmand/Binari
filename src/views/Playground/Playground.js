import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AceEditor from "react-ace";
import styles from "assets/jss/material-kit-react/views/playground.js";
import Node from './tree'
import Canvas from './canvas'
import Error from './Error'
import Debug from './Debug'
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";
import {js} from 'js-beautify'

const consolePrint = console.log
const beautify = js
const useStyles = makeStyles(styles);

export default function Playground(props) {
  const classes = useStyles();
  const [currentCode, setCode] = useState(Node);
  const displayCode = beautify(currentCode)
  const log = []

  console.log = function(message){
    log.push(message)
  }

  let unsavedCode = displayCode
  let canvas
  let debug

  try {
    let node = new Function(`${currentCode}; return Node`)()

    //Tests all edge cases before the real run
    let BinaryTree = new node(50)
    if(typeof BinaryTree.left === 'undefined'){
      throw {name: 'ReferenceError', message: "BinaryTree.left is not defined"}
    }
    if(typeof BinaryTree.right === 'undefined'){
      throw {name: 'ReferenceError', message: "BinaryTree.right is not defined"}
    }
    if(typeof BinaryTree.value === 'undefined'){
      throw {name: 'ReferenceError', message: "BinaryTree.value is not defined"}
    }
    BinaryTree.insert(25)
    BinaryTree.insert(15)
    BinaryTree.insert(35)
    BinaryTree.insert(75)
    BinaryTree.insert(85)
    BinaryTree.insert(65)

    //True Initialization
    let tree = new node(50)

    canvas = <Canvas tree={tree} size={28} />
    debug = <Debug>{''+log}</Debug>
  } catch (err) {
    canvas = <Error type={err.name}>{err.message}</Error>
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
                    height="600px"
                    value={displayCode}
                    onChange={(val)=> unsavedCode = val}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    editorProps={{ $blockScrolling: false }}
                  />
                  {debug}
                  <div className={classes.codeButtons}>
                    <Button 
                      color="white"
                      simple={true}
                      onClick={()=>setCode(unsavedCode)}
                    > Run Code </Button>
                    <Button 
                      color="warning"
                      simple={true}
                      onClick={()=>setCode(Node)}
                    > Reset </Button>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <div className={classes.canvasRegion}>
                    <div className={classes.titleRegion}>
                      <h1>Binary Trees</h1>
                      <h2>Introduction</h2>
                    </div>
                    {canvas}             
                  </div>
                </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
}
