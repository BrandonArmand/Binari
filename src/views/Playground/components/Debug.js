import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import consoleIcon from "../../../assets/imgs/console.svg";

const useStyle = makeStyles({
  log: {
    fontFamily: "Consolas, serif",
    width: "100%",
    margin: "auto",
    padding: "10px",
    background: "#333",
    color: "#ddd",
    height: "110px"
  },
  title: {
    fontFamily: "IBM Plex Mono",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "31px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(179.45deg, #9EBDEC 6.17%, #5C78A2 93.84%)",
    color: "#ddd",
    margin: 0,
    padding: "5px 10px"
  },
  directory: {
    color: "rgb(200, 200, 0)"
  },
  success: {
    color: "rgb(50, 200, 0)"
  },
  error: {
    color: "rgb(255, 30, 30)"
  },
  icon: {
    display: "inline-block",
    marginLeft: "2px",
    marginRight: "17px",
    marginBottom: "3px",
    height: "20px",
    width: "20px"
  }
});

export default function Debug({ data }) {
  const classes = useStyle();

  return (
    <>
      <h3 className={classes.title}>
        <img src={consoleIcon} alt="" className={classes.icon} /> Console
      </h3>
      <div className={classes.log}>
        {data.map(el => (
          <div>
            <span className={classes.directory}>
              {`binari@env/wrkspc${Math.floor(Math.random() * 100) + 100}`}
            </span>{" "}
            {"> "}
            {el === "Success" && <span className={classes.success}>{el}</span>}
            {el === "Error" && <span className={classes.error}>{el}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
