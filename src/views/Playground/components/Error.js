import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    error: {
        width: "100%",
        height: '100%',
        margin: 'auto',
        padding: '50px',
        background: '#333',
        color: 'whitesmoke'
    },
    title: {
        background: '#d96161',
        color: 'whitesmoke',
        margin: 0,
        padding: '0 10px'
    },
    errorType: {
        float: 'right'
    }
})

export default function Error(props){
    const classes = useStyle()
    const {type, children} = props

    return (
        <>
        <h3 className={classes.title}>Error | <span className={classes.errorType}>{type}</span></h3>
        <div className={classes.error}>
            {children}
        </div>
        </>
    )
}