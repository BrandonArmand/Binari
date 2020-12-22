/* eslint-disable-next-line */
/* eslint-disable no-new-func, no-console, import/no-webpack-loader-syntax */
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AceEditor from "react-ace";
import ace from "ace-builds/src-min-noconflict/ace";
import javascriptWorker from "file-loader!ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-twilight";
import styles from "assets/jss/material-kit-react/views/playground.js";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

import { Canvas, Debug, Error, Info, Directory } from "./components";
import { setPage, saveCode, resetCode } from "../../store/actions";
import chapter from "./chapters";

import baseTest from "./test";

ace.config.setModuleUrl("ace/mode/javascript_worker", javascriptWorker);

const useStyles = makeStyles(styles);
const difficultyColorScheme = {
    0: "rgb(150, 255, 255)",
    1: "rgb(150, 255, 171)",
    2: "rgb(255, 229, 150)",
    3: "rgb(255, 150, 150)",
};

function Playground(props) {
    const classes = useStyles();

    // To make the Run and Reset buttons always work
    // we force currentCodeObj to always be a new object
    // and therefore re-render the Playground component
    const { page, currentCodeObj, setPage, saveCode, resetCode, } = props;
    const currentCode = currentCodeObj[page];

    //this ref will point to the splitter to adjust it's state
    const lessonRef = useRef();

    let unsavedCode = currentCode;
    let log = [];
    let canvas;
    let debug;

    document.onkeydown = function (e) {
        //CTRL + ENTER to run code
        if (e.ctrlKey && e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("btnRunCode").click();
        }
        //CTRL + ALT + R to Reset code
        if (e.ctrlKey && e.altKey && e.keyCode === 82) {
            document.getElementById("btnReset").click();
        }
    };

    console.log = function (...args) {
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
        canvas = <Canvas tree={node.tree} size={28}/>;
        console.log("Success");
    } catch (err) {
        canvas = <Error type={err.name}>{err.message}</Error>;
        console.log("Error");
    } finally {
        debug = <Debug data={log}/>;
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
                                    <tbody>
                                        {chapter.map((el, i) => (
                                            <tr
                                                onClick={() => {
                                                    saveCode(unsavedCode);
                                                    setPage(i);
                                                }}
                                                style={{ background: page === i && "#222", }}
                                                key={i}
                                            >
                                                <td>{i}</td>
                                                <td className={classes.lesson}>{el.name}</td>
                                                <td
                                                    style={{
                                                        background: difficultyColorScheme[el.difficulty],
                                                    }}
                                                    className={classes.difficulty}
                                                ></td>
                                            </tr>
                                        ))}
                                    </tbody>
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
                                    editorProps={{ $blockScrolling: false, }}
                                    style={{ willChange: "auto !important", }}
                                />
                                {debug}
                                <div className={classes.codeButtons}>
                                    <Button
                                        id="btnRunCode"
                                        color="white"
                                        simple={true}
                                        onClick={() => saveCode(unsavedCode)}
                                        title="Run (CTR+Enter)"
                                    >
                                        {" "}
                                        Run Code{" "}
                                    </Button>
                                    <Button
                                        id="btnReset"
                                        color="warning"
                                        simple={true}
                                        onClick={resetCode}
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
                                        ref={lessonRef}
                                        vertical={true}
                                        customClassName={classes.splitter}
                                        secondaryInitialSize={160}
                                        secondaryMinSize={25}
                                    >
                                        {canvas}
                                        <Info
                                            text={chapter[page].lesson}
                                            expand={()=>{
                                                lessonRef.current.setState({
                                                    secondaryPaneSize:400,
                                                });
                                            }}
                                            hide={()=>{
                                                lessonRef.current.setState({
                                                    secondaryPaneSize:25,
                                                });
                                            }}
                                            show={()=>{
                                                lessonRef.current.setState({
                                                    secondaryPaneSize: 160,
                                                });
                                            }}/>
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

Playground.propTypes = {
    page: PropTypes.number.isRequired,
    currentCodeObj: PropTypes.object.isRequired,
    setPage: PropTypes.func.isRequired,
    saveCode: PropTypes.func.isRequired,
    resetCode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        page: state.lessons.page,
        currentCodeObj: state.lessons.currentCode,
    };
};

export default connect(
    mapStateToProps,
    { setPage, saveCode, resetCode, }
)(Playground);
