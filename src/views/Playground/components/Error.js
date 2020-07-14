import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import warningIcon from "../../../assets/imgs/warning.svg";
import PropTypes from "prop-types";

const useStyle = makeStyles({
    error: {
        background: "#333",
        color: "#ddd",
        fontFamily: "Consolas, serif",
        height: "100%",
        margin: "auto",
        padding: "10px",
        width: "100%",
    },
    title: {
        alignItems: "center",
        background: "linear-gradient(179.45deg, #CD0505 6.17%, #9F2828 93.84%)",
        color: "#ddd",
        display: "flex",
        fontFamily: "IBM Plex Mono",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "31px",
        margin: 0,
        padding: "5px 10px",
    },
    errorType: {
        display: "inline-block",
        marginLeft: "auto",
    },
    errorFont: {
        color: "rgb(255, 30, 30)",
    },
    icon: {
        display: "inline-block",
        height: "22px",
        marginBottom: "3px",
        marginLeft: "0.2rem",
        marginRight: "17px",
        width: "22px",
    },
});

const Error = ({ type, children, }) => {
    const classes = useStyle();

    return (
        <>
            <h3 className={classes.title}>
                <img
                    src={warningIcon}
                    alt=""
                    className={`${classes.icon} fas fa-times`}
                ></img>{" "}
                Error 
                <span className={classes.errorType}>{type}</span>
            </h3>
            <div className={classes.error}>
                <span className={classes.errorFont}>{type}</span>: {children}
            </div>
        </>
    );
};

Error.propTypes = {
    type: PropTypes.any,
    children: PropTypes.any,
};

export default Error;
