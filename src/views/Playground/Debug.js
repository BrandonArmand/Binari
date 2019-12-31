import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    log: {
        width: "100%",
        margin: 'auto',
        padding: '50px',
        background: '#333',
        color: 'whitesmoke'
    },
    title: {
        background: '#618ad9',
        color: 'whitesmoke',
        margin: 0,
        padding: '0 10px'
    },
})

export default function Debug(props){
    const classes = useStyle()
    const {data} = props

    return (
        <>
        <h3 className={classes.title}>Console |</h3>
        <div className={classes.log}>
            {data.map(el => <div>{el}</div>)}
        </div>
        </>
    )
}