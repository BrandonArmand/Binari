import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

const useStyle = makeStyles({
  main: {
    background: "white",
    width: "100%",
    maxWidth: "100%",
    padding: "0 30px"
  }
});

const Info = props => {
  const classes = useStyle();
  const { text } = props;

  return (
    <>
      <Markdown className={classes.main} source={text} />
    </>
  );
};

Info.propTypes = {
  text: PropTypes.any
};

export default Info;
