import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Markdown from 'react-markdown'
import Icon from './Icon'

const useStyle = makeStyles({
    main: {
        background: 'white',
        width: '100%',
        maxWidth: '100%',
        padding: '0 30px',
    }
})

export default function Info(props){
    const classes = useStyle()
    const {text} = props
    
    return (
        <>
        <Icon/>
        <Markdown className={classes.main} source={text}/>
        </>
    )
}

