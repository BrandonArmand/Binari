import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import store from "./store";
import Button from "components/Button/Button";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// import LandingPage from "views/LandingPage/LandingPage.js";
// import Playground from "views/Playground/Playground";
// import About from "views/About/About";

//To decrease the initial load time I have added lazy loading to views.

const LandingPage = React.lazy(() => import("views/LandingPage/LandingPage"));
const Playground = React.lazy(() => import("views/Playground/Playground"))
const About = React.lazy(() => import("views/About/About"))

var hist = createBrowserHistory();
const useStyles = makeStyles(styles);

function App() {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <Router history={hist}>
                <Header
                    color="transparent"
                    route="/"
                    brand="Binari"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 150,
                        color: "white",
                    }}
                />
                <Parallax
                    filter
                    image={
                        "https://images.unsplash.com/photo-1520262454473-a1a82276a574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    }
                >
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Binari</h1>
                                <p className={classes.subtitle}>
                                    Binary Trees are a gateway towards a deeper understanding of
                                    programming. Through the use of both recursion and
                                    iterative implementations, any developer can be guided towards
                                    becoming a more complete programmer.
                                </p>
                                <br/>
                                <Button color="primary" linkTo="/playground">
                                    Get Started
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <Suspense fallback={<h1> </h1>}>
                    <Switch>
                        <Route path="/playground" component={Playground}/>
                        <Route path="/about" component={About}/>
                        <Route path="/" component={LandingPage}/>
                    </Switch>
                </Suspense>
            </Router>
            <Footer/>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
