import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Playground from "views/Playground/Playground";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


var hist = createBrowserHistory();
const useStyles = makeStyles(styles);


function App(){
  const classes = useStyles();

  return (
    <>
    <Router history={hist}>
      <Header
      color="transparent"
      route='/'
      brand="Binari"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 150,
        color: "white"
      }}
      />
      <Parallax filter image={"https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Binari</h1>
              <h4>
                Binary Trees are a gateway towards a deeper understanding of dynamic programming.
                Through the use of both recurssion and iterative implimentations any developer can guided
                towards a more complete programmer.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
        </Parallax>      
        <Switch>
        <Route path="/playground" component={Playground} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
    <Footer />
  </>
  )
}

ReactDOM.render(
  <App />
  ,
  document.getElementById("root")
);
