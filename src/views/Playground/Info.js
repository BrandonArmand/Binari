import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    main: {
        minHeight: '100px',
        height: '100%',
        background: 'white',
        width: '100%',
    }
})

export default function Info(props){
    const classes = useStyle()
    const {children} = props
    
    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}