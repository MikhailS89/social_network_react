import React from 'react';
import './Message.scss';
import {Box} from "@mui/material";

export default function Message({text = '', author = 'User'}) {
    //console.log('Message(props)', props);
    return (
        <Box className="message">
            <h4 className="message__title">{text}</h4>
            <p className="message__text">{author}</p>
        </Box>
    )
}