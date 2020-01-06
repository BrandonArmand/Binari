import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Markdown from 'react-markdown'

const useStyle = makeStyles({
    main: {
        background: 'white',
        width: '100%',
    }
})

export default function Info(props){
    const classes = useStyle()
    const {text} = props
    
    return (
        <Markdown className={classes.main} source={text}/>
    )
}