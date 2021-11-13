import React from 'react';
import './Message.scss';

export default function Message(props) {
    return (
        <div className="message">
            <h4 className="meessge__title">{props.title}</h4>
        </div>
    )
}