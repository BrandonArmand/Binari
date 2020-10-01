import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Money_off from "@material-ui/icons/MoneyOff";
import Interactive from "@material-ui/icons/TouchApp";
import lock from "@material-ui/icons/LockOpen";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Let{"'"}s talk code</h2>
                    <p className={classes.description}>
            Understanding Data Structures and Algorithms can be hard, I&apos;ve
            been there. That is why I built Binari, a one-stop shop for all
            things Binary Tree. Binari uses an interactive view so that you can
            fully encompass how Binary Trees operate.
                    </p>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer className={classes.infoSection}>
                    <GridItem xs={12} sm={12} md={4} className={classes.infoItem}>
                        <InfoArea
                            title="Completely Free"
                            description="This app is, and always will be, completely free. Enjoy it till the day the internet implodes."
                            icon={Money_off}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.infoItem}>
                        <InfoArea
                            title="Interactive"
                            description="Unlike other methods, Binari aims to explain binary trees through the use of interactive visuals. "
                            icon={Interactive}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.infoItem}>
                        <InfoArea
                            title="Open Source"
                            description="Explore, break, and learn from my code. The whole service is open to the public, so feel free to dive in."
                            icon={lock}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <iframe
                            title="youtube-video"
                            width="100%"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/7HgsS8bRvjo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
              &gt;
                        </iframe>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.videoTitle}>Universal Value Tree Problem</h2>
                        <p className={classes.videoDescription}>
              There are many resources on the internet that break down various
              complex algorithms through interactive and visual understanding.
              An example is the video featured here. In addition to online
              resources, Gayle Laakmann Mcdowell, a software engineer and
              author, is known for a series of career development books. Her
              most notable work, Cracking the Coding Interview, offers insight
              into preparing for technical interviews, as well as methods on how
              to approach different types of algorithms.
                        </p>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
