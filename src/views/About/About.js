import React, {useEffect, useState} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/aboutPage.js";

import Card from './components/Card'

const useStyles = makeStyles(styles);

function commitAdd(arr){
  return arr.reduce((a,b)=>{
    return (typeof a.a != 'undefined' ? a.a : a) + b.a
  })
}

function commitDel(arr){
  return arr.reduce((a,b)=>{
    return (typeof a.d != 'undefined' ? a.d : a) + b.d
  })
}

export default function About(props) {
  const classes = useStyles();
  const [contributors, setContributors] = useState(null)
  const apiToken = process.env.REACT_APP_TOKEN //Read-Access Token

  useEffect(() => {
    fetch(`https://api.github.com/repos/brandonarmand/binari/stats/contributors?access_token=${apiToken}`)
      .then(response => response.json())
      .then(data => setContributors(data))
  })
  
  return (
    <div>
      <div className={'floating-main '+classNames(classes.main, classes.mainRaised)}>
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
          </GridContainer>
          <GridContainer justify="space-evenly">
              <h1 className={classes.title}>Team</h1>
              <Card 
                avatar="https://avatars0.githubusercontent.com/u/27185256?v=4" 
                linkedin="test" 
                github="test" 
                web="test">
                <h2>Brandon A. Welsh</h2>
              </Card>

              <h1 className={classes.title}>Contributors</h1>
              {contributors ? contributors.map((el)=>{
                return (
                  <Card 
                    avatar={el.author.avatar_url} 
                    github={el.author.html_url} 
                    commits={el.total}
                    additions={commitAdd(el.weeks)}
                    deletions={commitDel(el.weeks)}>
                    <h3>{el.author.login}</h3>
                  </Card>
                )
              }) : <p>Loading...</p>}
          </GridContainer>
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Want to help?</h2>
              <h2 className={classes.subtitle}>
                There are a list of issues on Github that you are welcome to work on, 
                but if you have an idea of your own, we are open to allowing any pull request we believe fits well with Binari's vision.
              </h2>
              <h3 className={classes.subtitle}>Things you can do:</h3>
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <ul className={classes.subtitle}>
                <li>Bug Fixes</li>
                <li>Spelling Fixes</li>
              </ul>
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <ul className={classes.subtitle}>
                <li>UI/UX</li>
                <li>Art</li>
              </ul>
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <ul className={classes.subtitle}>
                <li>Enhancments</li>
                <li>Optimizations</li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <a href="https://github.com/BrandonArmand/Binari/issues"><h4>Start Contributing</h4></a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
