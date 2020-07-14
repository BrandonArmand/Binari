import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyle = makeStyles({
    directory: {
        background: "#333",
        height: "100%",
        border: "solid 1px black",
    },
    title: {
        marginTop: "5px",
        textAlign: "center",
        color: "whitesmoke",
    },
    links: {
        color: "whitesmoke",
        width: "100%",
        textAlign: "start",
        fontSize: "14px",
        lineHeight: "1.7em",
    },
});

const Directory = props => {
    const classes = useStyle();
    const { children, } = props;

    return (
        <div className={classes.directory}>
            <h3 className={classes.title}>Directory</h3>
            <table className={classes.links}>{children}</table>
        </div>
    );
};

Directory.propTypes = {
    children: PropTypes.any,
};

export default Directory;
