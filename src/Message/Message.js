import React from 'react';
import './Message.scss';

export default function Message({text = '', author = ''}) {
    //console.log('Message(props)', props);
    return (
        <div className="message">
            <h4 className="message__title">{text}</h4>
            <p className="message__text">{author}</p>
        </div>
    )
}