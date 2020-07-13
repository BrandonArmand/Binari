import React, { useState, useEffect } from "react";
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
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

import { js } from "js-beautify";
import { Canvas, Debug, Error, Info, Directory } from "./components";
import chapter from "./chapters";

import baseTest from "./test";

const beautify = js;
const useStyles = makeStyles(styles);
const difficultyColorScheme = {
  0: "rgb(150, 255, 255)",
  1: "rgb(150, 255, 171)",
  2: "rgb(255, 229, 150)",
  3: "rgb(255, 150, 150)"
};

export default function Playground(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [currentCode, setCode] = useState(beautify(chapter[page].defaultCode));

  let unsavedCode = currentCode;
  let log = [];
  let canvas;
  let debug;

  document.onkeydown = function(e) {
    //CTRL + ENTER to run code
    if (e.ctrlKey && e.keyCode == 13) {
      document.getElementById("btnRunCode").click(); 
    }
    //CTRL + ALT + R to Reset code
    if (e.ctrlKey && e.altKey && e.which == 82 == 82) {
      document.getElementById("btnReset").click();
    }
  };

  function changePage(newPage) {
    setPage(newPage);
    setCode(beautify(chapter[newPage].defaultCode));
  }

  console.log = function(...args) {
    args.forEach(e => {
      log.push(e);
    });
  };

  try {
    let node = new Function(`
      ${currentCode}
      return {tree, Node}
    `)();

    //Validate tree implementation
    baseTest(node);
    //Check if chapter's requirements have been met example:
    /*let chapterPassed = chapter[page].test(node);
    console.log(chapterPassed ? "Chapter Passed" : "Chapter Failed");*/
    //True Initialization
    canvas = <Canvas tree={node.tree} size={28} />;
    console.log("Success");
  } catch (err) {
    canvas = <Error type={err.name}>{err.message}</Error>;
    console.log("Error");
  } finally {
    debug = <Debug data={log} />;
  }

  useEffect(() => {
    console.dir(props);
  });

  return (
    <>
      <div className={"margin-top " + classes.margin}>
        <div
          className={
            "floating-main " + classNames(classes.main, classes.mainRaised)
          }
        >
          <div>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2} lg={2}>
                <Directory>
                  {chapter.map((el, i) => (
                    <tr
                      onClick={() => changePage(i)}
                      style={{ background: page === i && "#222" }}
                      key={i}
                    >
                      <td>{i}</td>
                      <td className={classes.lesson}>{el.name}</td>
                      <td
                        style={{
                          background: difficultyColorScheme[el.difficulty]
                        }}
                        className={classes.difficulty}
                      ></td>
                    </tr>
                  ))}
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
                  onChange={val => (unsavedCode = val)}
                  enableBasicAutocompletion={true}
                  enableLiveAutocompletion={true}
                  editorProps={{ $blockScrolling: false }}
                />
                {debug}
                <div className={classes.codeButtons}>
                  <Button
                    Id = "btnRunCode"
                    color="white"
                    simple={true}
                    onClick={() => setCode(unsavedCode)}
                    title="Run (CTR+Enter)"
                  >
                    {" "}
                    Run Code{" "}
                  </Button>
                  <Button
                    Id = "btnReset"
                    color="warning"
                    simple={true}
                    onClick={() => setCode(beautify(chapter[page].defaultCode))}
                    title="Run (CTRL+ALT+R)"
                  >
                    {" "}
                    Reset{" "}
                  </Button>
                </div>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} lg={5}>
                <div className={classes.canvasRegion}>
                  <SplitterLayout
                    vertical={true}
                    customClassName={classes.splitter}
                    secondaryInitialSize={160}
                  >
                    {canvas}
                    <Info text={chapter[page].lesson} />
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
