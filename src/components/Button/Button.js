import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/buttonStyle.js";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Button(props) {
    const classes = useStyles();
    const { color, children, linkTo, onClick, } = props;

    // if linkTo property is specified, use Link instead of button
    if (linkTo) {
        return (
            <Link
                to={linkTo}
                className={classes.button + " " + classes[color]}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }
    return (
        <button className={classes.button + " " + classes[color]} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    children: PropTypes.node,
    linkTo: PropTypes.string,
    onClick: PropTypes.func,
};
