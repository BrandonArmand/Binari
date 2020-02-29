import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    icon: {
        width: '30px',
        height: '30px',
        background: 'blue',
        display: 'inline',
        float: 'right'
    }
})

export default function Icon(props) {
    const classes = useStyle();

    return (
        <button className={classes.icon} onClick={test}>TEST</button>
    )
}

function test() {
    alert("test!");
  }