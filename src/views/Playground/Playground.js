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
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";
import {js} from 'js-beautify'

const beautify = js
const useStyles = makeStyles(styles);

export default function Playground(props) {
  const classes = useStyles();
  const [currentCode, setCode] = useState(Node);
  const displayCode = beautify(currentCode)
  let unsavedCode = displayCode
  let treeNode = new Function(`${currentCode}; return Node`)()
  let tree = new treeNode(50)

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
                    value={displayCode}
                    onChange={(val)=> unsavedCode = val}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    editorProps={{ $blockScrolling: false }}
                  />
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <Button onClick={()=>setCode(unsavedCode)}>Run</Button>
                  <h1>Binary Trees</h1>
                  <h2>Introduction</h2>
                  <Canvas tree={tree} size={25} />
                </GridItem>
            </GridContainer>
            </div>
        </div>
      </div>
    </>
  );
}
