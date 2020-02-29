import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";
import styles from "assets/jss/material-kit-react/views/playground.js";
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import {js} from 'js-beautify'
import {Canvas, Debug, Error, Info, Directory, Icon} from './components'
import chapter from './chapters'

const beautify = js
const useStyles = makeStyles(styles);

export default function Playground(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [currentCode, setCode] = useState(beautify(chapter[page].defaultCode));

  let unsavedCode = currentCode
  let log = []
  let canvas
  let debug

  function changePage(newPage){
    setPage(newPage)
    setCode(beautify(chapter[newPage].defaultCode))
  }

  console.log = function(...args){
    args.forEach(e=>{
      log.push(e)
    })
  }

  try {
    let node = new Function(`
      ${currentCode}
      return {tree, Node}
    `)()

    //Tests all edge cases before the real run
    let BinaryTree = new node.Node(50)
    let tree = node.tree

    if(typeof tree.left === 'undefined'){
      throw {name: 'ReferenceError', message: "tree.left is not defined"}
    }
    if(typeof tree.right === 'undefined'){
      throw {name: 'ReferenceError', message: "tree.right is not defined"}
    }
    if(typeof tree.value === 'undefined'){
      throw {name: 'ReferenceError', message: "tree.value is not defined"}
    }
    if(typeof BinaryTree.left === 'undefined'){
      throw {name: 'ReferenceError', message: "Node.left is not defined"}
    }
    if(typeof BinaryTree.right === 'undefined'){
      throw {name: 'ReferenceError', message: "Node.right is not defined"}
    }
    if(typeof BinaryTree.value === 'undefined'){
      throw {name: 'ReferenceError', message: "Node.value is not defined"}
    }

    BinaryTree.insert(25)
    BinaryTree.insert(15)
    BinaryTree.insert(35)
    BinaryTree.insert(75)
    BinaryTree.insert(85)
    BinaryTree.insert(65)

    //True Initialization
    canvas = <Canvas tree={tree} size={28} />
    console.log('Success')
  } catch (err) {
    canvas = <Error type={err.name}>{err.message}</Error>
    console.log('Error')
  } finally {
    debug = <Debug data={log}/>
  }

  return (
    <>
      <div className={'margin-top '+classes.margin}>
        <div className={'floating-main '+classNames(classes.main, classes.mainRaised)}>
          <div>
            <GridContainer>
                <GridItem xs={12} sm={2} md={2} lg={2}>
                  <Directory>
                  {chapter.map((el,i)=> <tr onClick={()=>changePage(i)} style={{background: page === i && "#222"}}><td>{i}</td><td>{el.name}</td></tr>)}
                  </Directory>
                </GridItem>
                <GridItem xs={12} sm={5} md={5} lg={5}>
                  <AceEditor
                    mode="javascript"
                    theme="twilight"
                    name="code"
                    width="100%"
                    height="calc(100vh - 325px)"
                    value={currentCode}
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
                      onClick={()=>setCode(beautify(chapter[page].defaultCode))}
                    > Reset </Button>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={5} md={5} lg={5}>
                  <div className={classes.canvasRegion}>
                
                    <SplitterLayout vertical={true} customClassName={classes.splitter} secondaryInitialSize={160}>
                     {/* need to set secondaryInitialSize={10} on button click */}
                      {canvas}
                      
                      <Info text={chapter[page].lesson}/>
                      
                    </SplitterLayout>
                    
                  </div>
                </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
}
