import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import consoleIcon from "../../../assets/imgs/console.svg";
import PropTypes from "prop-types";

const useStyle = makeStyles({
    log: {
        fontFamily: "Consolas, serif",
        width: "100%",
        margin: "auto",
        padding: "10px",
        background: "#333",
        color: "#ddd",
        height: "110px",
        overflowY: "scroll",
    },
    title: {
        fontFamily: "IBM Plex Mono",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "20px",
        lineHeight: "31px",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(179.45deg, #9EBDEC 6.17%, #5C78A2 93.84%)",
        color: "#ddd",
        margin: 0,
        padding: "5px 10px",
    },
    directory: {
        color: "rgb(200, 200, 0)",
    },
    success: {
        color: "rgb(50, 200, 0)",
    },
    error: {
        color: "rgb(255, 30, 30)",
    },
    icon: {
        display: "inline-block",
        marginLeft: "2px",
        marginRight: "17px",
        marginBottom: "3px",
        height: "20px",
        width: "20px",
    },
});

const Debug = ({ data, }) => {
    const classes = useStyle();
    const wrkspc = Math.floor(Math.random() * 100) + 100;
    const output = data.map((el, i) => {
        let result = "";
        switch (el) {
        case "Success":
            result = <span className={classes.success}>{el}</span>;
            break;
        case "Error":
            result = <span className={classes.error}>{el}</span>;
            break;
        default:
            result = <span>{el}</span>;
        }
        return lineOutput(result, wrkspc, i);
    });

    function lineOutput(line, wrkspc, key) {
        return (
            <div key={key}>
                <span className={classes.directory}>
                    {`binari@env/wrkspc${wrkspc}`}
                </span>{" "}
                {"> "}
                {line}
            </div>
        );
    }

    return (
        <>
            <h3 className={classes.title}>
                <img src={consoleIcon} alt="" className={classes.icon} /> Console
            </h3>
            <div className={classes.log}>{output}</div>
        </>
    );
};

Debug.propTypes = {
    data: PropTypes.any,
};

export default Debug;
