import React, {useEffect, useState} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/aboutPage.js";

const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  const [contributors, setContributors] = useState(null)
  const apiToken = process.env.REACT_APP_TOKEN //Read-Access Token

  useEffect(()=>{
    fetch(`https://api.github.com/repos/brandonarmand/binari/stats/contributors?access_token=${apiToken}`)
    .then( response => response.json() )
    .then( data => setContributors(data) )
  })
  
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Mission</h1>
              <h2 className={classes.subtitle}>
                Binari's mission statement is to provide the best experience for new developers through an easy to use code-editor and data structure visuallization.
                The problem with learning a new algorithm or data-structure tends to lie with the intial understanding with how the data/code gets organized. 
                I am here to fix that, and you are welcome to join.
              </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Team</h1>
              <h2 className={classes.subtitle}>
                ** To Do**
              {contributors ? contributors.map((el)=>{
                return <p>{el.author.login}</p>
              }) : <p>Loading...</p>}
              </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Contributors</h1>
              <h2 className={classes.subtitle}>
                ** To Do**
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
