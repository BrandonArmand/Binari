import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import "assets/scss/canvas.scss";

const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
}
