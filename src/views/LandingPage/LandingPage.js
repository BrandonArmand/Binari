import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import "assets/scss/canvas.scss";

const useStyles = makeStyles(styles);

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div>
            <div
                className={
                    "floating-main landing-region " +
          classNames(classes.main, classes.mainRaised)
                }
            >
                <div className={classes.container}>
                    <ProductSection />
                </div>
            </div>
        </div>
    );
}
