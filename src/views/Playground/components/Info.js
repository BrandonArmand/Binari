import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

const useStyle = makeStyles({
    main: {
        background: "white",
        width: "100%",
        maxWidth: "100%",
        padding: "0 30px",
    },
});

const Info = props => {
    const classes = useStyle();
    const { text, } = props;

    return (
        <>
            <IconButton
                className="far fa-square"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 30,
                    height:"20px",
                }}
                onClick={()=>props.show()}/>
            <IconButton
                className="fas fa-square"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 60,
                    height:"20px",
                }}
                onClick={()=>props.expand()}/>
            <IconButton
                className="fas fa-window-minimize"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height:"20px",
                }}
                onClick={()=>props.hide()}/>
            <Markdown className={classes.main} source={text} />
        </>
    );
};

Info.propTypes = {
    text: PropTypes.any,
    show: PropTypes.func,
    expand: PropTypes.func,
    hide: PropTypes.func,
};

export default Info;
