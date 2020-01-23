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
import Tooltip from "@material-ui/core/Tooltip";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";



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
    height: '200px',
    minWidth: '200px',
    minHeight: '200px',
    background: 'grey'
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
    padding: '12px 30px',
    color: 'white'
  },
  wrapper: {
    width: '100%'
  },
  icon: {
      marginRight: '10px',
      marginTop: '2px'
  },
  ...tooltip
};

const useStyles = makeStyles(styles);

export default function ContributorCard(props) {
  const classes = useStyles();
  return (
        <GridItem className={classes.card}>
          <Card>
            <CardHeader color={props.color} img>
                <div className={classes.cardHeader}>
                    <img className={classes.cardImg} src={props.avatar}></img>
                    <div className={classes.wrapper}>
                        {props.linkedin &&
                            <Button color="linkedin" simple href={props.linkedin}>
                                <i className="fab fa-linkedin"/>{" "}
                                Linkedin
                            </Button>
                        }
                        {props.github && 
                            <Button color="linkedin" simple href={props.github}>
                                <i className="fab fa-github"/>{" "}
                                Github
                            </Button>
                        }
                        {props.dribbble && 
                            <Button color="linkedin" simple href={props.dribbble}>
                                <i className="fab fa-dribbble"/>{" "}
                                Dribbble
                            </Button>
                        }
                        {props.web && 
                            <Button color="linkedin" simple href={props.web}>
                                <i className="fas fa-globe"/>{" "}
                                Website
                            </Button>
                        }
                        {props.commits && 
                              <Tooltip
                                title="Commits"
                                placement="right"
                                classes={{ tooltip: classes.tooltip }}
                              >
                              <div className={classes.info}>
                                  <i className={"fas fa-code-branch "+classes.icon} style={{color:"lightblue"}}/>{" "}
                                  {props.commits}
                              </div>
                            </Tooltip>
                        }
                        {props.additions && 
                            <Tooltip
                              title="Additions"
                              placement="right"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.info}>
                                  <i className={"fas fa-plus "+classes.icon} style={{color:"lightgreen"}}/>{" "}
                                  {props.additions}
                              </div>
                            </Tooltip>
                        }
                        {props.deletions && 
                            <Tooltip
                              title="Deletions"
                              placement="right"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.info}>
                                  <i className={"fas fa-minus "+classes.icon} style={{color:"red"}}/>{" "}
                                  {props.deletions}
                              </div>
                            </Tooltip>
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