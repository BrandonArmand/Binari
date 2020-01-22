import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";

var styles = {
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardImg: {
    maxWidth: '200px',
    maxHeight: '200px',
    width: '200px',
    height: '200px'
  },
  cardHeader: {
    display: 'flex',
  },
  card: {
    width: '400px'
  },
  info: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 30px'
  },
  wrapper: {
    width: '100%'
  },
  icon: {
      marginRight: '10px',
      marginTop: '2px'
    }
};

const useStyles = makeStyles(styles);

export default function ContributorCard(props) {
  const classes = useStyles();
  return (
        <GridItem className={classes.card}>
          <Card>
            <CardHeader color="primary" img>
                <div className={classes.cardHeader}>
                    <img className={classes.cardImg} src={props.avatar}></img>
                    <div className={classes.wrapper}>
                        {props.linkedin &&
                            <Button color="linkedin" simple>
                                <i className="fab fa-linkedin"/>{" "}
                                Linkedin
                            </Button>
                        }
                        {props.github && 
                            <Button color="linkedin" simple>
                                <i className="fab fa-github"/>{" "}
                                Github
                            </Button>
                        }
                        {props.web && 
                            <Button color="linkedin" simple>
                                <i className="fas fa-globe"/>{" "}
                                Website
                            </Button>
                        }
                        {props.commits && 
                            <div className={classes.info}>
                                <i className={"fas fa-code-branch "+classes.icon} style={{color:"lightblue"}}/>{" "}
                                {props.commits}
                            </div>
                        }
                        {props.commits && 
                            <div className={classes.info}>
                                <i className={"fas fa-plus "+classes.icon} style={{color:"lightgreen"}}/>{" "}
                                20,000
                            </div>
                        }
                        {props.commits && 
                            <div className={classes.info}>
                                <i className={"fas fa-minus "+classes.icon} style={{color:"red"}}/>{" "}
                                582
                            </div>
                        }
                    </div>
                </div>
            </CardHeader>
            <CardBody>
              {props.children}
            </CardBody>
          </Card>
        </GridItem>
  );
}