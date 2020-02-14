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
          <h5 className={classes.description}>
            Understanding Data Structures and Algorythms can be hard, i've been there.
            That is why I built Binari, a one-stop shop for all things Binary Tree.
            Binari uses an interactive view so that you can fully encompas how Binary Trees operate.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Completely Free"
              description="This app is, and always will be, completely free. Enjoy it till the day the internet implodes."
              icon={Money_off}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Interactive"
              description="Unlike other methods for teaching binary trees, Binari aims to explain through the use of interactive visuals. "
              icon={Interactive}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
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
          <GridItem xs={12} sm={6} md={6}>
            <iframe 
              width="100%" 
              height="315"
              src="https://www.youtube-nocookie.com/embed/7HgsS8bRvjo"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
              </iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Gayle Laakmann McDowell</h2>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
