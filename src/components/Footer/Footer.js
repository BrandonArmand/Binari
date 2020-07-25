import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import netlify from "assets/imgs/netlify.svg";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont, } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont,
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a href="https://www.netlify.com">
                                <img
                                    src={netlify}
                                    alt="Deploys by Netlify"
                                />
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="http://brandonarmand.com"
                                className={classes.block}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                Brandon A. Welsh
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/BrandonArmand/Binari/blob/master/LICENSE.md"
                                className={classes.block}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                MIT License
                            </a>
                        </ListItem>
                    </List>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool,
};
